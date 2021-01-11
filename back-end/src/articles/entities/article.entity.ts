import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CommentEntity } from './comment.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { ServerEntity } from 'src/servers/entities/server.entity';

@Entity()
@ObjectType()
export abstract class ArticleEntity extends CoreEntity {
  @Column()
  @Field(_type => String)
  @IsString()
  title: string;

  @Column({ default: '' })
  @Field(_type => String)
  @IsString()
  body: string;

  @Column('simple-array')
  @Field(_type => [String])
  @IsString({ each: true })
  tagList: string[];

  @ManyToOne(_type => UserEntity, user => user.articles)
  @Field(_type => UserEntity)
  author: UserEntity;

  @OneToMany(_type => CommentEntity, comment => comment.article, {
    eager: true,
  })
  @JoinColumn()
  @Field(_type => [CommentEntity])
  comments: CommentEntity[];

  @Column({ default: 0 })
  @Field(_type => Number)
  favoriteCount: number;
}

@Entity()
@ObjectType()
export class ModArticleEntity extends ArticleEntity {
  @Column({ default: '' })
  @Field(_type => String)
  description: string;

  @Column('simple-array')
  @Field(_type => [String])
  supportVersions: string[];
}

@Entity()
@ObjectType()
export class AdArticleEntity extends ArticleEntity {
  @Column({ default: '' })
  @Field(_type => String)
  description: string;

  @OneToOne(() => ServerEntity)
  @JoinColumn()
  @Field(_type => String)
  server: ServerEntity;

  @Column()
  @Field(_type => String)
  thumbnail: string;
}
