import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  // Promise.reject()
  const a = 10;
  res.send(a);
};

app.get('/', test);

// Global error handler
app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
