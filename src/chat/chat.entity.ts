import { Logger } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chat {
  private logger = new Logger(Chat.name);

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chatRoomId: number;

  @Column()
  userId: number;

  @Column()
  text: string;
}
