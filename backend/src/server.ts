import { UserController } from './controllers/user';
import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import { NoticeController } from './controllers/notice';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    // Esse app vem do server que to extendendo
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const noticeController = new NoticeController();
    const userController = new UserController();
    this.addControllers([noticeController, userController]);
  }

  public getApp(): Application {
    return this.app;
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.info('Server listening on port:', this.port);
    });
  }
}
