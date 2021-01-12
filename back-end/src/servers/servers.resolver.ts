import { HttpStatus } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateServerInput,
  CreateServerOutput,
} from './dtos/create-server.dto';
import { SearchServerDto } from './dtos/search-server.dto';
import { ServersService } from './servers.service';

@Resolver()
export class ServersResolver {
  constructor(private readonly serversService: ServersService) {}

  @Query(() => [SearchServerDto])
  getServers() {
    return this.serversService.findAll();
  }

  @Mutation(_return => CreateServerOutput)
  async createServer(
    @Args('data') createServerInput: CreateServerInput,
  ): Promise<CreateServerOutput> {
    await this.serversService.create(createServerInput);
    return {
      code: HttpStatus.CREATED,
      message: 'New server Information was created',
    };
  }
}
