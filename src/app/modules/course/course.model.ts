import { Schema, model } from 'mongoose';
import { TCourse, TPreRequisite } from './course.interface';

const preRequisiteCourseSchema = new Schema<TPreRequisite>({
  course: {
    type: Schema.Types.ObjectId,
  },
  isDeleted: {
    type: Boolean,
    default: true,
  },
});

const courseSchema = new Schema<TCourse>({
  title: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  prefix: {
    type: String,
    trim: true,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  credits: {
    type: Number,

    required: true,
  },
  preRequisiteCourse: [preRequisiteCourseSchema],
});

export const Course = model<TCourse>('Course', courseSchema);
