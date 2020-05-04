import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
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
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
        type: configService.get<'mysql' | 'mariadb'>('DB_TYPE'),
        host: configService.get<string>('DATABASE_USER'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [`${__dirname}/entities/*.entity{.ts,.js}`],
        synchronize: true,
        supportBigNumbers: true,
        bigNumberStrings: false,
      }),
      inject: [ConfigService],
    }),
    TestModule,
    ChatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
