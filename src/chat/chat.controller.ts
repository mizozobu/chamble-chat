import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { chat } from '@protos/types';
import { Observable, Subject } from 'rxjs';
import { Chat } from '@entities/chat.entity';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  private logger = new Logger(ChatController.name);

  constructor(private chatService: ChatService) {}

  /**
   * Connect to server stream for chat
   */
  @GrpcMethod()
  connect({ userId }: Required<chat.IReqConnect>): Observable<Required<chat.IResConnect>> {
    const subject = new Subject<Required<chat.IResConnect>>();

    const onError = (err: Error): void => {
      subject.unsubscribe();
      this.logger.error(err);
    };
    const onComplete = (): void => {
      this.logger.debug('connect server stream ended');
    };
    subject.subscribe(null, onError, onComplete);

    this.chatService.registerConnection(userId, subject);

    return subject.asObservable();
  }

  /**
   * Disconnect from server stream for chat
   */
  @GrpcMethod()
  public disconnect({ userId }: Required<chat.IReqDisconnect>): Required<chat.IResDisconnect> {
    this.chatService.unregisterConnection(userId);

    return { ok: true };
  }

  /**
   * Send a chat message
   */
  @GrpcMethod()
  public sendChatMessage(
    chatMessage: Required<chat.IReqSendChatMessage>,
  ): Required<chat.IResSendChatMessage> {
    const newChat = new Chat(chatMessage);
    this.chatService.sendChatMessage(newChat);

    return { ok: true };
  }
}
