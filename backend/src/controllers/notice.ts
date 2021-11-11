import { Controller, Get } from '@overnightjs/core';
import { Response, Request } from 'express';

@Controller('notices')
export class NoticeController {
  @Get('')
  public getNotices(_: Request, res: Response): void {
    res.send({ msg: 'OK' });
  }
}
