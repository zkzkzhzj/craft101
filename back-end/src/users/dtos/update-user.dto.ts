import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.dto';

@InputType()
class UpdateUserInputType extends PartialType(CreateUserInput) {}

@InputType()
export class UpdateUserDto {
  @Field(type => Number)
  id: number;

  @Field(type => UpdateUserInputType)
  data: UpdateUserInputType;
}
