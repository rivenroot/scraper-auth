import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import type { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('app')
export class ApkController {
  @Get('version')
  getVersion() {
    return {
      latest: '1.0.1',
      apkUrl: 'https://scraper.polysoft.rs/scraper-1.0.1.apk',
    };
  }

  @Get('install/:name')
  getApk(@Param('name') name: string, @Res() res: Response) {
    const apkPath = path.join(__dirname, '..', '..', 'public', name);

    if (!fs.existsSync(apkPath)) {
      throw new NotFoundException('APK not found');
    }

    res.setHeader('Content-Type', 'application/vnd.android.package-archive');
    res.setHeader('Content-Disposition', `attachment; filename="${name}"`);

    return res.sendFile(apkPath);
  }
}
