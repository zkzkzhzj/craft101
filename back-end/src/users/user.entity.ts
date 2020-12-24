import { IsEmail } from 'class-validator';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as argon2 from 'argon2';
import { Article } from 'src/articles/article.entity';

export enum UserRole {
  ADMIN = 'admin',
  GENERAL = 'general',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
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
  role: UserRole;

  @Column({ default: false })
  isActive: boolean;

  @OneToMany((type) => Article, (post) => post.author)
  articles: Article[];
}
