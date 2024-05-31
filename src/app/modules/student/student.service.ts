import { TStudent } from './student.interface';
import { Student } from './student.model';
import studentValidationSchema from './student.zod.validation';
import { User } from '../user/user.model';

const createStudentIntoDB = async (studentData: TStudent, password: string) => {
  // Validate the student data with Zod schema
  studentValidationSchema.parse(studentData);

  // Check if a student with the same ID already exists
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('Student with the same ID already exists');
  }

  // Create a new User document with the password
  const newUser = await User.create({
    id: studentData.id,
    password: password, // Assign the password here
    role: 'student',
    status: 'in-progress',
    isDeleted: false,
  });

  // Assign the created user's _id to the student data
  studentData.user = newUser._id;

  // Create a new student document
  const result = await Student.create(studentData);

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
