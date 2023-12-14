import { courseFilterPaginationParamsI } from "../../utilities/filterPaginationParamsI";
import globalResponse from "../../utilities/globalResponse";
import { CourseI } from "./course.interface";
import { CourseModel } from "./course.model";

const addCourseIntoDB = async (payload: CourseI) => {
  // result have same data as payload
  const startDateString = new Date(payload.startDate);
  const endDateString = new Date(payload.endDate);
  const timeDifference = endDateString.getTime() - startDateString.getTime();
  const durationInWeeks = Math.ceil(timeDifference / (7 * 24 * 60 * 60 * 1000));
  const result = new CourseModel({ ...payload, durationInWeeks: durationInWeeks });
  await result.save();
  const newResult = { result };
  return globalResponse(true,201,"Course created successfully",newResult);
};

const getAllCourses =async (params:courseFilterPaginationParamsI) => {
      const page = Number(params.page) || 1;
      const limit = Number(params.limit) || 10;
      const skip = (page - 1) * limit;
      const orderBy = params.sortOrder || 'asc';
      const sortObject: any = {};
      const sortField = params.sortBy as string;
      sortObject[sortField] = orderBy;  
      let query = CourseModel.find();
      if (params.sortBy) {
        query = query.sort(sortObject);
      }
      const result = await query.skip(skip).limit(limit).exec();
      const totalCount = await CourseModel.countDocuments();
      return globalResponse(true,201,"Course retrieved successfully",result,{page:page,limit:limit,total:totalCount});
  }


  const getCourseAndReviews = async (params:object) => {

    
      const course = await CourseModel.findById()
  }


export const courseService = {
  addCourseIntoDB,
  getAllCourses,
  getCourseAndReviews
};
