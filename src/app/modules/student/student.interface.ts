import { Model } from "mongoose";

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContectNo: string;
  motherName: string;
  motherOccupation: string;
  motherContectNo: string;
};
export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type TUsername = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type TStudent = {
  id: string;
  name: TUsername;
  gender: 'male' | 'female'|'other';
  dateOfBirth?: string;
  contactNo: string;
  emargencyContactNo: string;
  email: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};

// for creating static 
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>
}





// for creating instance
// export type StudentMethods = {
//   isUserExists(id:string): Promise<TStudent | null>
// }

// export type StudentModel = Model<TStudent, 
// Record<string,never>
// , StudentMethods>
