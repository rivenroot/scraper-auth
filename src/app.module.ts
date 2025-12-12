import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckModule } from './check/check.module';
import { ProxyModule } from './proxy/proxy.module';

@Module({
  imports: [CheckModule, ProxyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
