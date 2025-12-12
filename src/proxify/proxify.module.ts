import { Module } from '@nestjs/common';
import { ProxifyService } from './proxify.service';
import { ProxifyController } from './proxify.controller';

@Module({
  controllers: [ProxifyController],
  providers: [ProxifyService],
})
export class ProxifyModule {}
