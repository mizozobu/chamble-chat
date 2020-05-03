import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TestService {
  private logger = new Logger(TestService.name);

  public accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => Number(a) + Number(b), 0);
  }
}
