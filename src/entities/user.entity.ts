import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { TypeormConstructorParam } from '@utils/utility-types';
import { Chat } from './chat.entity';
import { ChatRoom } from './chat-room.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  public readonly id?: number;

  @Column()
  @Index({ unique: true })
  public displayName: string;

  @Column({ type: 'bit', width: 1, default: 0 })
  public deleted?: boolean = false;

  @CreateDateColumn({ type: 'timestamp', update: false })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', update: false })
  public readonly updatedAt?: Date;

  @ManyToMany(
    () => ChatRoom,
    chatRoom => chatRoom.users,
  )
  public chatRooms?: Promise<ChatRoom[]>;

  @OneToMany(
    () => Chat,
    chat => chat.user,
  )
  public chats?: Promise<Chat[]>;

  constructor(data: TypeormConstructorParam<User>) {
    if (data) {
      const { displayName } = data;
      this.displayName = displayName;
    }
  }
}
