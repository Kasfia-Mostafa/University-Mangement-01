import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import httpStatus from 'http-status';
import AppError from '../../Errors/AppError';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty', // Reference the AcademicFaculty model
    },
  },
  {
    timestamps: true,
  },
);

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartment.findOne(query);

  if (!isDepartmentExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This department does not exist!');
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
