import { Schema, model } from "mongoose";
import { CourseDetailsI, CourseI, TagsI } from "./course.interface";

const TagsSchema = new Schema<TagsI>({
  name: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
  },
});

const CourseDetailsSchema = new Schema<CourseDetailsI>({
  level: {
    type: String,
  },
  description: {
    type: String,
  },
});

const CourseSchema = new Schema<CourseI>({
  title: {
    type: String,
  },
  instructor: {
    type: String,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
  },
  price: {
    type: Number,
  },
  tags: {
    type: TagsSchema,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  language: {
    type: String,
  },
  provider: {
    type: String,
  },
  durationInWeeks: {
    type: Number,
  },
  details: {
    type: CourseDetailsSchema,
  },
});

export const CourseModel = model<CourseI>("Course", CourseSchema);
