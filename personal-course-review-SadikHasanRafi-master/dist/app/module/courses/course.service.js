"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseService = void 0;
const globalResponse_1 = __importDefault(require("../../utilities/globalResponse"));
const course_model_1 = require("./course.model");
const addCourseIntoDB = async (payload) => {
    // result have same data as payload
    const startDateString = new Date(payload.startDate);
    const endDateString = new Date(payload.endDate);
    const timeDifference = endDateString.getTime() - startDateString.getTime();
    const durationInWeeks = Math.ceil(timeDifference / (7 * 24 * 60 * 60 * 1000));
    const result = new course_model_1.CourseModel({ ...payload, durationInWeeks: durationInWeeks });
    await result.save();
    const newResult = { result };
    return (0, globalResponse_1.default)(true, 201, "Course created successfully", newResult);
};
const getAllCourses = async (params) => {
    const page = Number(params.page) || 1;
    const limit = Number(params.limit) || 10;
    const skip = (page - 1) * limit;
    const orderBy = params.sortOrder || 'asc';
    const sortObject = {};
    const sortField = params.sortBy;
    sortObject[sortField] = orderBy;
    let query = course_model_1.CourseModel.find();
    if (params.sortBy) {
        query = query.sort(sortObject);
    }
    const result = await query.skip(skip).limit(limit).exec();
    const totalCount = await course_model_1.CourseModel.countDocuments();
    return (0, globalResponse_1.default)(true, 201, "Course retrieved successfully", result, { page: page, limit: limit, total: totalCount });
};
const getCourseAndReviews = async (params) => {
    const course = await course_model_1.CourseModel.findById();
};
exports.courseService = {
    addCourseIntoDB,
    getAllCourses,
    getCourseAndReviews
};
