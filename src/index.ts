// write over engineered express server
import express, { Request, Response, Application, NextFunction } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv-safe';
dotenv.config();
import user from '@src/users/users.controller';

const app: Application = express();

const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

console.log('user', user);

app
  .route('/user')
  .get((_req: Request, _res: Response, _next: NextFunction): void => {
    _res.send('Get User');
  })
  .post((_req: Request, _res: Response): void => {
    _res.send('Post User');
  })
  .put((_req: Request, _res: Response): void => {
    _res.send('Put User');
  })
  .delete((_req: Request, _res: Response): void => {
    _res.send('Delete User');
  })
  .all((_req: Request, _res: Response): void => {
    _res.send('X User');
  });

app.listen(port, (): void => {
  console.log(`Application listening at http://localhost:${port}`);
});
