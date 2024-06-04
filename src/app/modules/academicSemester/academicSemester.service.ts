import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

type TAcademicSemesterNameCodeMapper = {
  // Autumn: '01';
  // Summer: '02';
  // Fall: '03';

  [key: string]: string;
};

const createAcademicSemesterInDB = async (payload: TAcademicSemester) => {
  // semester name => semester code
  const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code');
  }

  const result = await AcademicSemester.create(payload);

  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterInDB,
};
