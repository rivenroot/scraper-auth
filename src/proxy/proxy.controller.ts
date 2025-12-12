import { Controller, Get } from '@nestjs/common';

@Controller('proxy')
export class ProxyController {
  constructor() {}

  @Get()
  async getProxy() {
    return await fetch(
      'https://api.proxyscrape.com/v2/account/datacenter_shared/proxy-list?auth=1r7dzu84jfdjmzrmbk9g&type=getproxies&country[]=all&protocol=http&format=json&status=online',
    ).then((a) => a.text());
  }
}
