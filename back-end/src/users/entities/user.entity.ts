import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as argon2 from 'argon2';
import { ArticleEntity } from 'src/articles/entities/article.entity';
import { Field, ObjectType } from '@nestjs/graphql';

export enum UserRole {
  ADMIN = 'admin',
  GENERAL = 'general',
}

@Entity()
@ObjectType()
export class UserEntity {
  @PrimaryGeneratedColumn()
  @Field(type => Number)
  id: number;

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
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GENERAL,
  })
  @Field(type => UserRole)
  role: UserRole;

  @Column({ default: false })
  @Field(type => Boolean)
  isActive: boolean;

  @OneToMany(type => ArticleEntity, post => post.author)
  @Field(type => [ArticleEntity])
  articles: ArticleEntity[];
}
