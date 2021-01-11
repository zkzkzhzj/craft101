import { Field, ObjectType } from '@nestjs/graphql';
import { IsEthereumAddress, IsNumber, IsString, IsUrl } from 'class-validator';
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
  // TEST: Multiple types
  @IsEthereumAddress()
  @IsUrl()
  serverIP: string;

  @Column()
  @Field(_type => String)
  @IsString()
  bannerImage: string;

  @Column()
  @Field(_type => String)
  @IsString()
  homepageURI: string;

  @Column({ default: 0 })
  @Field(_type => Number)
  @IsNumber()
  favoriteCount: number;
}
