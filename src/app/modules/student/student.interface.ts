export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContectNo: string;
  motherName: string;
  motherOccupation: string;
  motherContectNo: string;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type Username = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type Student = {
  id: string;
  name: Username;
  gender: 'male' | 'female'|'other';
  dateOfBirth?: string;
  contactNo: string;
  emargencyContactNo: string;
  email: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
