import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { StudentID } = req.params;
    const result = await StudentServices.getSingleStudentsFromDB(StudentID);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { StudentID } = req.params;
    const result = await StudentServices.deleteStudentsFromDB(StudentID);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  // createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
