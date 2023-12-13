import globalResponse from "../../utilities/globalResponse";
import { CourseI } from "./course.interface";
import { CourseModel } from "./course.model";

const addCourseIntoDB = async (payload: CourseI) => {
  const result = new CourseModel(payload);
  await result.save();
  // result have same data as payload
  const startDateString = new Date(result.startDate);
  const endDateString = new Date(result.endDate);
  const timeDifference = endDateString.getTime() - startDateString.getTime();
  const durationInWeeks = Math.ceil(timeDifference / (7 * 24 * 60 * 60 * 1000));
  const newResult = { ...payload, durationInWeeks: durationInWeeks };

  return globalResponse(true,201,"Course created successfully",newResult);
};

const getAllCourses =async (params:params) => {
    
}


export const courseService = {
  addCourseIntoDB,
  getAllCourses
};
