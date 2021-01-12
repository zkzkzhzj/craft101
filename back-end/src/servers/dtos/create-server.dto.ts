import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { ServerEntity } from '../entities/server.entity';

@InputType()
export class CreateServerInput extends OmitType(
  ServerEntity,
  ['id', 'updatedAt', 'createdAt', 'favoriteCount'],
  InputType,
) {}

@ObjectType()
export class CreateServerOutput {
  @Field(_type => Number)
  code: number;

  @Field(_type => String)
  message: string;
}
