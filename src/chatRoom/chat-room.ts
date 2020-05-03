import { Logger } from '@nestjs/common';

export class ChatRoom {
  private logger = new Logger(ChatRoom.name);

  public id: number;

  constructor() {
    this.id = Math.floor(Math.random() * Math.floor(10));
    this.logger.debug(`created ChatRoom ${this.id}`);
  }

  /**
   * Get users in the room
   */
  public getUsers(): number[] {
    // TODO get all users in the room from db and return list of id
    return [1];
  }
}
