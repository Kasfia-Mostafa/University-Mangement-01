import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// router.post('/create-student', StudentControllers.createStudent);

router.get('/', StudentControllers.getAllStudents);
router.get('/:StudentId', StudentControllers.getSingleStudent);
router.delete('/:StudentId', StudentControllers.deleteStudent);

export const StudentRoutes = router;
