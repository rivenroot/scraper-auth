import { Controller, Post, Body } from '@nestjs/common';
import { ProxifyService } from './proxify.service';

@Controller('proxify')
export class ProxifyController {
  constructor(private readonly proxifyService: ProxifyService) {}

  @Post()
  async proxify(@Body() body: { url: string }) {
    return this.proxifyService.fetchThroughProxy(body.url);
  }
}
