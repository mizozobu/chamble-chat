import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TestModule } from './test/test.module';
import { ChatModule } from './chat/chat.module';

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
    ChatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
