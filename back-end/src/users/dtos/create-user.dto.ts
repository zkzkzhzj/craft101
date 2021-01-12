import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { UserEntity } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends PickType(
  UserEntity,
  ['email', 'username', 'password', 'nickname'] as const,
  InputType,
) {}

@ObjectType()
export class CreateUserOutput {
  @Field(_type => Number)
  code: number;

  @Field(_type => String)
  message: string;
}
