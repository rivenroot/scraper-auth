import { Controller, Get, Query } from '@nestjs/common';

@Controller('check')
export class CheckController {
  constructor() {}

  uids: {
    uid: string;
    name: string;
  }[] = [
    {
      name: 'Nikola Test',
      uid: '197e03a57bd685b5',
    },
  ];

  @Get()
  findOne(@Query('uid') uid: string) {
    const user = this.uids.filter((i) => i.uid === uid);
    if (user.length == 1) {
      return true;
    } else {
      return false;
    }
  }
}
