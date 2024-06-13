import { Types } from "mongoose";

export type TAcademicFaculty = {
    name: string;
    user: Types.ObjectId;
  };