import { Inject, Controller, Get, Post, Provide } from '@midwayjs/decorator';
import { Context } from 'egg';
import { IGlobalResult } from '../interface';
import { StaticService } from '../service/static';

@Provide()
@Controller('/mock/log/api/v2')
export class AlertEventController {
  @Inject()
  ctx: Context;

  @Inject()
  staticService: StaticService;

  @Get('/*')
  @Post('/*')
  async getMockDataByGet(): Promise<IGlobalResult> {
    const originalUrl = this.ctx.originalUrl;
    console.log('test');
    const filePath = originalUrl.replace('/mock/log/api/v2/', '');
    const content = await this.staticService.getStaticData(filePath);
    return { success: true, message: 'OK', data: content };
  }
}
