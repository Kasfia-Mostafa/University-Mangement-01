import Joi from 'joi';
const userNameValidationSchema = Joi.object({
    firstName: Joi.string()
      .trim()
      .max(20)
      .required()
      .regex(/^[A-Z][a-z]*$/, 'capitalized')
      .messages({
        'string.empty': 'First name is required',
        'string.max': 'Max allowed length is 20',
        'string.pattern.name': '{#label} is not capitalized',
      }),
    middleName: Joi.string().trim().optional(),
    lastName: Joi.string()
      .trim()
      .required()
      .pattern(/^[A-Za-z]+$/, 'alpha')
      .messages({
        'string.empty': 'Last name is required',
        'string.pattern.name': '{#label} is not a valid last name',
      }),
  });

  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required().messages({
      'string.empty': 'Father name is required',
    }),
    fatherContectNo: Joi.string().required().messages({
      'string.empty': 'Father contact number is required',
    }),
    fatherOccupation: Joi.string().required(),
    motherName: Joi.string().required(),
    motherContactNo: Joi.string().required(),
    motherOccupation: Joi.string().required(),
  });

  const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required(),
  });

  const studentValidationSchema = Joi.object({
    id: Joi.string().required().messages({
      'string.empty': 'ID is required',
    }),
    name: userNameValidationSchema.required(),
    gender: Joi.string()
      .valid('male', 'female', 'other')
      .required()
      .messages({
        'any.only': '{#label} must be one of [male, female, other]',
        'string.empty': 'Gender is required',
      }),
    dateOfBirth: Joi.date(),
    email: Joi.string().email().required().messages({
      'string.empty': 'Email is required',
      'string.email': '{#label} is not a valid email',
    }),
    contactNo: Joi.string().required(),
    emargencyContactNo: Joi.string().required(),
    bloodGroup: Joi.string().valid(
      'A+',
      'A-',
      'B+',
      'B-',
      'AB+',
      'AB-',
      'O+',
      'O-',
    ),
    presentAddress: Joi.string().required(),
    parmanentAddress: Joi.string().required(),
    guardian: guardianValidationSchema.required(),
    localGuardian: localGuardianValidationSchema.required(),
    profileImg: Joi.string().uri().optional(),
    isActive: Joi.string().valid('active', 'blocked').default('active'),
  });

export default studentValidationSchema;