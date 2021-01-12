import { UserEntity } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from './post.entity';

@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @ManyToOne((type) => UserEntity, (user) => user.comments)
  author: UserEntity;

  @ManyToOne((type) => PostEntity, (post) => post.comments)
  post: PostEntity;
}
