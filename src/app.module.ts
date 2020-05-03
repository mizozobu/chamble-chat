import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TestModule } from './test/test.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        // '.env.development',
        // '.env.production',
        '.env',
      ],
      isGlobal: true,
    }),
    TestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
