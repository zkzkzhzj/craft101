import { HttpStatus, UseGuards } from '@nestjs/common';
import { Args, Context, Query, Mutation, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { UserLoginInput, UserLoginOutput } from './dtos/login-user.dto';
import { UpdateUserInput } from './dtos/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => CreateUserOutput)
  async createUser(
    @Args('data') createUserInput: CreateUserInput,
  ): Promise<CreateUserOutput> {
    try {
      const isComplate = await this.usersService.create(createUserInput);
      return {
        code: isComplate ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST,
        message: 'New account was created.',
      };
    } catch (error) {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: error,
      };
    }
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Args('form') updateUserDto: UpdateUserInput,
  ): Promise<boolean> {
    return this.usersService.update(updateUserDto);
  }

  @Query(() => UserLoginOutput)
  login(@Args('user') loginInput: UserLoginInput): Promise<UserLoginOutput> {
    return this.usersService.login(loginInput);
  }

  @Query(() => UserEntity)
  @UseGuards(AuthGuard)
  me(@Context() context): UserEntity {
    return context.user;
  }
}
