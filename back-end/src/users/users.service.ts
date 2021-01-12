import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { LoginUserDto } from './dtos/login-user.dto';
import { UserEntity } from './entities/user.entity';
import * as argon2 from 'argon2';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { validate } from 'class-validator';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async login({ username, password }: LoginUserDto): Promise<UserEntity> {
    const user = await this.usersRepository.findOne({ username });
    if (!!user && (await argon2.verify(user.password, password))) {
      return user;
    }
    return null;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create({
    email,
    username,
    password,
    nickname,
  }: CreateUserInput): Promise<boolean> {
    const queryBuilder = getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('user.username = :username', { username })
      .orWhere('user.email = :email', { email });
    const isExists = await queryBuilder.getOne();
    if (isExists) {
      const errorMessage = { message: 'Username and Email must be unique.' };
      throw new HttpException(
        {
          errorMessage,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const newUserEntity = new UserEntity();
    newUserEntity.username = username;
    newUserEntity.email = email;
    newUserEntity.password = password;
    newUserEntity.nickname = nickname;
    const errors = await validate(newUserEntity);
    console.log(errors);
    if (errors.length > 0) {
      const errorMessage = { message: 'Request data is invalied.' };
      throw new HttpException({ errorMessage }, HttpStatus.BAD_REQUEST);
    }
    await this.usersRepository.save(newUserEntity);
    return true;
  }

  async update({ id, data }: UpdateUserDto): Promise<boolean> {
    try {
      this.usersRepository.update(id, { ...data });
      return true;
    } catch (error) {
      return false;
    }
  }
}
