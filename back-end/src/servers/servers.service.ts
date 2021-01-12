import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServerInput } from './dtos/create-server.dto';
import { ServerEntity } from './entities/server.entity';

@Injectable()
export class ServersService {
  constructor(
    @InjectRepository(ServerEntity)
    private serverRepository: Repository<ServerEntity>,
  ) {}

  findAll(): Promise<ServerEntity[]> {
    return this.serverRepository.find();
  }

  create(createServerInput: CreateServerInput) {
    return this.serverRepository.save(createServerInput);
  }
}
