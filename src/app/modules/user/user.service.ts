import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import {  TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);

  // set user role
  userData.role = 'student';

  // let manually generated it
  userData.id = '22203034';

  // create a user
  const newUser = await User.create(userData);

  //  create a student
  if (Object.keys(newUser).length) {
    // console.log(newUser)
  // set if , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id // reference _id

    const newStudent =  await Student.create(studentData)
    
    return newStudent
  }
};

export const UserServices = {
  createStudentIntoDB,
};
