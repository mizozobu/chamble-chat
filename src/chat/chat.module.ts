import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from '@entities/chat.entity';
import { ChatRoom } from '@entities/chat-room.entity';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Chat, ChatRoom])],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
