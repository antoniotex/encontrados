import { CategoryController } from './controllers/caterory';
import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import { UserController } from './controllers/user';
import { PostController } from './controllers/post';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './util/swaggerDocs';
import cors from 'cors';

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
    this.app.use(
      '/swagger',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocs, { explorer: true })
    );
    this.app.use(cors())
  }

  private setupControllers(): void {
    const postController = new PostController();
    const userController = new UserController();
    const categoryController = new CategoryController();
    this.addControllers([postController, userController, categoryController]);
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
