import {
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './comment.entity';
import { User } from 'src/users/user.entity';

@Entity()
export abstract class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column({ default: '' })
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date();
  }

  @Column('simple-array')
  tagList: string[];

  @ManyToOne((type) => User, (user) => user.articles)
  author: User;

  @OneToMany((type) => Comment, (comment) => comment.article, {
    eager: true,
  })
  @JoinColumn()
  comments: Comment[];

  @Column({ default: 0 })
  favoriteCount: number;
}

@Entity()
export class AdArticle extends Article {
  @Column({ default: '' })
  description: string;
}

@Entity()
export class ModArticle extends Article {
  @Column({ default: '' })
  description: string;
}

@Entity()
export class NormalArticle extends Article {}
