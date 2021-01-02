import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => Boolean)
  async createUser(
    @Args('data') createUserDto: CreateUserDto,
  ): Promise<boolean> {
    await this.usersService.create(createUserDto);
    return true;
  }
}
