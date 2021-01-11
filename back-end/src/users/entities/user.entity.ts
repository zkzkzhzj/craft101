import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import * as argon2 from 'argon2';
import { ArticleEntity } from 'src/articles/entities/article.entity';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

export enum UserRole {
  ADMIN = 'admin',
  GENERAL = 'general',
}
registerEnumType(UserRole, { name: 'UserRole' });

@Entity()
@ObjectType()
// @InputType({ isAbstract: true })
export class UserEntity extends CoreEntity {
  @Column()
  @Field(type => String)
  @IsString()
  @Length(5)
  username: string;

  @Column()
  @Field(type => String)
  @IsEmail()
  email: string;

  @Column()
  @Field(type => String)
  @IsString()
  @Length(5, 10)
  nickname: string;

  @Column()
  @Field(type => String)
  @IsString()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GENERAL,
  })
  @Field(type => UserRole)
  @IsEnum(UserRole)
  role: UserRole;

  @Column({ default: false })
  @Field(type => Boolean, { defaultValue: false })
  @IsOptional()
  @IsBoolean()
  isActive: boolean;

  @OneToMany(type => ArticleEntity, post => post.author)
  @Field(type => [ArticleEntity])
  articles: ArticleEntity[];
}
