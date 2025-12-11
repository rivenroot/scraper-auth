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
    {
      name: 'Aca Test',
      uid: '49e40a3448fa0c00',
    },
    {
      uid: '5e1ec55108b91ca9',
      name: 'Ljupce',
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
