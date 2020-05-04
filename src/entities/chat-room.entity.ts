import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { TypeormConstructorParam } from '@utils/utility-types';
import { Chat } from './chat.entity';
import { User } from './user.entity';

@Entity()
export class ChatRoom {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  public readonly id?: number;

  @Column()
  public name: string;

  @Column({ type: 'bit', width: 1, default: 0 })
  public deleted?: boolean = false;

  @CreateDateColumn({ type: 'timestamp', update: false })
  public readonly createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', update: false })
  public readonly updatedAt?: Date;

  @ManyToMany(
    () => User,
    user => user.chatRooms,
  )
  @JoinTable()
  public users?: Promise<User[]>;

  @OneToMany(
    () => Chat,
    chat => chat.user,
  )
  public chats?: Promise<Chat[]>;

  /**
   * constructor for ChatRoom
   * @param data
   */
  constructor(data: TypeormConstructorParam<ChatRoom>) {
    if (data) {
      const { name } = data;
      this.name = name;
    }
  }
}
