import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckModule } from './check/check.module';
import { ProxyModule } from './proxy/proxy.module';
import { ApkModule } from './apk/apk.module';
import { ProxifyModule } from './proxify/proxify.module';

@Module({
  imports: [CheckModule, ProxyModule, ApkModule, ProxifyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
