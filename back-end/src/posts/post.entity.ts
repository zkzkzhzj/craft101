import { UserEntity } from 'src/users/user.entity';
import {
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommentEntity } from './comment.entity';

@Entity('post')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column({ default: '' })
  description: string;

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

  @ManyToOne((type) => UserEntity, (user) => user.posts)
  author: UserEntity;

  @OneToMany((type) => CommentEntity, (comment) => comment.post, {
    eager: true,
  })
  @JoinColumn()
  comments: CommentEntity[];

  @Column({ default: 0 })
  favoriteCount: number;
}
