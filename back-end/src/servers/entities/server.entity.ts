import { Field, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class ServerEntity extends CoreEntity {
  @Column()
  @Field(_type => String)
  @IsString()
  title: string;

  @Column()
  @Field(_type => String)
  @IsString()
  serverIP: string;

  @Column({ default: '' })
  @Field(_type => String)
  @IsOptional()
  @IsString()
  bannerImage?: string;

  @Column({ default: '' })
  @Field(_type => String)
  @IsOptional()
  @IsString()
  homepageURI?: string;

  @Column({ default: 0 })
  @Field(_type => Number)
  @IsOptional()
  @IsNumber()
  favoriteCount?: number;
}
