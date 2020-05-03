import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { chat } from 'protos/types';
import { Observable, Subject } from 'rxjs';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  private logger = new Logger(ChatController.name);

  constructor(private chatService: ChatService) {}

  /**
   * Connect to server stream for chat
   */
  @GrpcMethod()
  connect({ userId }: chat.IReqConnect): Observable<chat.IResConnect> {
    const subject = new Subject<chat.IResConnect>();

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
  public disconnect({ userId }: chat.IReqDisconnect): chat.IResDisconnect {
    this.chatService.unregisterConnection(userId);

    return { ok: true };
  }

  /**
   * Send a chat message
   */
  @GrpcMethod()
  public sendChatMessage(chatMessage: chat.IReqSendChatMessage): chat.IResSendChatMessage {
    this.chatService.sendChatMessage(chatMessage);

    return { ok: true };
  }
}
