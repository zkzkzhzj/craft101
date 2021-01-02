import { InputType, PickType } from '@nestjs/graphql';
import { UserEntity } from '../entities/user.entity';

@InputType()
export class CreateUserDto extends PickType(
  UserEntity,
  ['username', 'email', 'password'] as const,
  InputType,
) {}
