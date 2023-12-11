import { Schema, model } from "mongoose";
import { CourseCategoryI } from "./course-category.interface";

const CourseCategorySchema = new Schema<CourseCategoryI>({
    name:{
        types:String
    }
})


export const CourseCategoryModel = model<CourseCategoryI>('CourseCategory',CourseCategorySchema);
  