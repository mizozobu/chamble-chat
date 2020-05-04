import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { TypeormConstructorParam } from '@utils/utility-types';
import { User } from './user.entity';
import { ChatRoom } from './chat-room.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  public readonly id?: number;

  @Column({ type: 'bigint' })
  public chatRoomId: number;

  @Column({ type: 'bigint' })
  public userId: number;

  @Column({ type: 'text' })
  public text: string;

  @Column({ type: 'bit', width: 1, default: 0 })
  public deleted?: boolean = false;

  @CreateDateColumn({ type: 'timestamp', update: false })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', update: false })
  public readonly updatedAt?: Date;

  @ManyToOne(
    () => User,
    user => user.chats,
  )
  public user?: Promise<User>;

  @ManyToOne(
    () => ChatRoom,
    chatRoom => chatRoom.chats,
  )
  public chatRoom?: Promise<ChatRoom>;

  constructor(data: TypeormConstructorParam<Chat>) {
    if (data) {
      const { chatRoomId, userId, text } = data;
      this.chatRoomId = chatRoomId;
      this.userId = userId;
      this.text = text;
    }
  }
}
