import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
// console.log(req.body)
  const result = await UserServices.createStudentIntoDB(password, studentData);
  

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student created successfully',
    data: result,
  });
});
const createFaculty = catchAsync(async (req, res) => {
  const { password, Faculty: FacultyData } = req.body;
// console.log(req.body)
  const result = await UserServices.create(password, FacultyData);
  

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Faculty created successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,createFaculty
};
