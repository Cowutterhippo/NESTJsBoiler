import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  postNote(): string {
    return 'Hello World!';
  }
  protected getNote(): string {
    return 'Hello world';
  }
  connectToDatabase(): string {
    return 'Hello world';
  }
}
