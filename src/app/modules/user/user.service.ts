import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);

  // set user role
  userData.role = 'student';

  // find academic semester information
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  if (!admissionSemester) {
    throw new Error('Admission semester not found');
    }

  // let manually generated it
  userData.id = await generateStudentId(admissionSemester);

  
  // create a user
  const newUser = await User.create(userData);

  //  create a student
  if (Object.keys(newUser).length) {
    // console.log(newUser)
    // set if , _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; // reference _id

    const newStudent = await Student.create(payload);

    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
