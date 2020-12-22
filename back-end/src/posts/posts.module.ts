import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/user.entity';
import { CommentEntity } from './comment.entity';
import { PostEntity } from './post.entity';
import { PostsService } from './posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PostEntity, CommentEntity])],
  providers: [PostsService],
})
export class PostsModule {}
