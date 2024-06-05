import { TStudent } from './student.interface';
import { Student } from './student.model';
import { User } from '../user/user.model';
import { createStudentValidationSchema } from './student.zod.validation';

const createStudentIntoDB = async (studentData: TStudent, password: string) => {
  // Validate the student data with Zod schema
  createStudentValidationSchema.parse(studentData);

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
  const result = await Student.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  // const result = await Student.aggregate([{ $match: { id: id } }]);
  const result = await Student.findById(id)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const deleteStudentsFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentsFromDB,
};
