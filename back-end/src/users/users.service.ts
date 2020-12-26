import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import { UserEntity, UserRole } from './entities/user.entity';
import { UserRO } from './users.interface';
import * as argon2 from 'argon2';
import { CreateUserDto } from './dto/create-user.dto';
import { validate } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async findOne({ username, password }: LoginUserDto): Promise<UserEntity> {
    const user = await this.usersRepository.findOne({ username });
    if (!!user || (await argon2.verify(user.password, password))) {
      return user;
    }
    return null;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create({ email, username, password }: CreateUserDto): Promise<UserRO> {
    const queryBuilder = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('user.username = :username', { username })
      .orWhere('user.email = :email', { email });

    const isExists = await queryBuilder.getOne();
    if (isExists) {
      const errorMessage = { message: 'username and email must be unique.' };
      throw new HttpException(
        {
          errorMessage,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    let newUserEntity = new UserEntity();
    newUserEntity.username = username;
    newUserEntity.email = email;
    newUserEntity.password = password;
    const errors = await validate(newUserEntity);
    if (errors.length > 0) {
      const errorMessage = { message: 'request data is invalied.' };
      throw new HttpException({ errorMessage }, HttpStatus.BAD_REQUEST);
    } else {
      let user = await this.usersRepository.save(newUserEntity);
      return { user };
    }
  }
}
