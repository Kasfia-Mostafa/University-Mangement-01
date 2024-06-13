import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { courseValidation } from './course.validation';
import { CourseControllers } from './course.controllers';

const router = express.Router();

router.post(
  '/create-course',
  validateRequest(courseValidation.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get('/', CourseControllers.getAllCourse);

router.get('/:id', CourseControllers.getSingleCourse);

router.delete('/:id', CourseControllers.deleteCourse);

// router.patch(
//   '/:id',
//   validateRequest(
//     courseValidation.updateAcademicFacultyValidationSchema,
//   ),
//   AcademicFacultyControllers.updateAcademicFaculty,
// );

export const CourseRoutes = router;
