import { ListObjectsCommand, S3Client } from '@aws-sdk/client-s3';
import { Controller, ForbiddenException, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/error')
  getError(): string {
    throw new ForbiddenException('error test exception');
  }

  @Get('/s3')
  async getS3(): Promise<any> {
    const client = new S3Client({ region: 'us-east-1' });
    const params = {
      Bucket: 'test-nest-app',
    };
    const data = await client.send(new ListObjectsCommand(params));
    return data.Contents;
  }
}
