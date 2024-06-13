import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { CourserServices } from './course.service';
import sendResponse from '../../utils/sendResponse';

const createCourse = catchAsync(async (req, res) => {
  const result = await CourserServices.createCourseIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course created successfully',
    data: result,
  });
});

const getAllCourse = catchAsync(async (req, res) => {
  const result = await CourserServices.getAllCoursesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course are retrieved successfully',
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourserServices.getSingleCoursesFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is retrieved successfully',
    data: result,
  });
});

// const updateCourse = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await CourserServices.updateCourseIntoDB(
//     id,
//     req.body,
//   );

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Course is updated successfully',
//     data: result,
//   });
// });

const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourserServices.deleteCoursesIntoDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course is deleted successfully',
    data: result,
  });
});

export const CourseControllers = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  //   updateCourse,
  deleteCourse,
};
