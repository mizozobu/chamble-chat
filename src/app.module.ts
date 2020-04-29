import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ModuleMetadata } from '@nestjs/common/interfaces';
import { AppController } from './app.controller';
import { MathService } from './math.service';

export const appModuleMetadata: ModuleMetadata = {
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        // '.env.development',
        // '.env.production',
        '.env',
      ],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [MathService],
};

@Module(appModuleMetadata)
export class AppModule {}
