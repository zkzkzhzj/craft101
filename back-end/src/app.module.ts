import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, ArticlesModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {
  }
}
