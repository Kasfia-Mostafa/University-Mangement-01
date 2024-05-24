import { z } from 'zod';

// Username schema
const usernameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, 'Max allowed length is 20')
    .refine(
      (value) => /^[A-Z][a-z]*$/.test(value),
      'First name must be capitalized',
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .refine((value) => /^[A-Za-z]+$/.test(value), 'Last name is not valid'),
});

// Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherContectNo: z.string(),
  fatherOccupation: z.string(),
  motherName: z.string(),
  motherContectNo: z.string(),
  motherOccupation: z.string(),
});

// Local Guardian schema
const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Student schema
const studentValidationSchema = z.object({
    id: z.string(),
    name: usernameValidationSchema,
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string(),
    email: z.string().email('Not a valid email'),
    contactNo: z.string(),
    emargencyContactNo: z.string(),
    bloodGroup: z
      .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
      .optional(),
    presentAddress: z.string(),
    parmanentAddress: z.string(),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(['active', 'blocked']).default('active'),
  });
  

export default studentValidationSchema;
