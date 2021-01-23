import { HttpStatus } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { UserLoginInput, UserLoginOutput } from './dtos/login-user.dto';
import { UpdateUserInput } from './dtos/update-user.dto';
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

  @Mutation(() => UserLoginOutput)
  login(@Args('user') loginInput: UserLoginInput): Promise<UserLoginOutput> {
    return this.usersService.login(loginInput);
  }
}
