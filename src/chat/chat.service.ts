import { Injectable, Logger } from '@nestjs/common';
import { Subject } from 'rxjs';
import { chat } from 'protos/types';
import { ChatRoom } from '../chatRoom/chat-room';

@Injectable()
export class ChatService {
  private logger = new Logger(ChatService.name);

  private subjects: Map<number, Subject<chat.IResConnect>> = new Map();
  private chatRooms: Map<number, ChatRoom> = new Map();

  /**
   * Connect to chat. The subject is meant to be shared across all chat rooms
   */
  public registerConnection(userId: number, subject: Subject<chat.IResConnect>): void {
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
  public sendChatMessage(chatMessage: any): void {
    const room = this.getChatRoom(chatMessage.chatRoomId);
    if (room === undefined) {
      throw new Error(`cannot find chat room "${chatMessage.chatRoomId}"`);
    }

    const users = room.getUsers();

    // eslint-disable-next-line no-restricted-syntax
    for (const [userId, subject] of this.subjects.entries()) {
      if (users.includes(userId)) {
        subject.next(chatMessage);
        this.logger.debug(`sent chat message to "${userId}"`);
      }
    }
  }

  /**
   * Get chat room. Look up cache first and then DB
   */
  public getChatRoom(chatRoomId: number): ChatRoom {
    let room = this.chatRooms.get(chatRoomId);

    if (room === undefined) {
      // find from DB
      room = new ChatRoom();
      this.chatRooms.set(room.id, room);
    }

    return room;
  }
}
