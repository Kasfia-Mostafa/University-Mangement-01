import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// Middleware for logging or any other preprocessing
const shenaBahini = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  next();
};

// Route for creating a new student
router.post('/create-student', shenaBahini, UserControllers.createStudent);

export const UserRoutes = router;
