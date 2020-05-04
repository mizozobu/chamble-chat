import { Injectable, Logger } from '@nestjs/common';
import { Subject } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { chat } from '@protos/types';
import { Chat } from '@entities/chat.entity';
import { ChatRoom } from '@entities/chat-room.entity';

@Injectable()
export class ChatService {
  private logger = new Logger(ChatService.name);

  private subjects: Map<number, Subject<Required<chat.IResConnect>>> = new Map();
  private chatRooms: Map<number, ChatRoom> = new Map();

  constructor(
    @InjectRepository(Chat) private chatRepository: Repository<Chat>,
    @InjectRepository(ChatRoom) private chatRoomRepository: Repository<ChatRoom>,
  ) {}

  /**
   * Connect to chat. The subject is meant to be shared across all chat rooms
   */
  public registerConnection(userId: number, subject: Subject<Required<chat.IResConnect>>): void {
    this.subjects.set(userId, subject);
    this.logger.debug(`user "${userId}" connected to chat`);
  }

  /**
   * Connect to chat. The subject is meant to be shared across all chat rooms
   */
  public unregisterConnection(userId: number): void {
    this.subjects.delete(userId);
    this.logger.debug(`user "${userId}" disconnected from chat`);
  }

  /**
   * Send a message to everyone in the chat room
   */
  public async sendChatMessage(chatMessage: Chat): Promise<void> {
    const newChat = (await this.chatRepository.save(chatMessage)) as Required<Chat>;

    const room = await this.getChatRoom(chatMessage.chatRoomId);
    const users = await room.users;

    // eslint-disable-next-line no-restricted-syntax
    for (const userId of users.map(user => user.id)) {
      const subject = this.subjects.get(userId);
      if (subject !== undefined) {
        const res: Required<chat.IResConnect> = {
          id: newChat.id,
          userId: newChat.userId,
          chatRoomId: newChat.chatRoomId,
          text: newChat.text,
        };
        subject.next(res);
        this.logger.debug(`sent chat message to "${userId}"`);
      }
    }
  }

  /**
   * Get chat room. Look up cache first and then DB
   */
  public async getChatRoom(chatRoomId: number): Promise<ChatRoom> {
    let room = this.chatRooms.get(chatRoomId);

    if (room === undefined) {
      room = await this.chatRoomRepository.findOne(chatRoomId);
      this.chatRooms.set(room.id, room);
    }

    return room;
  }
}
