import { Module } from '@nestjs/common';
import { ServersService } from './servers.service';
import { ServersResolver } from './servers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerEntity } from './entities/server.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServerEntity])],
  providers: [ServersService, ServersResolver],
})
export class ServersModule {}
