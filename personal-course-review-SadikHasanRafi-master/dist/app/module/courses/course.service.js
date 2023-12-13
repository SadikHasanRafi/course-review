"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseService = void 0;
const globalResponse_1 = __importDefault(require("../../utilities/globalResponse"));
const course_model_1 = require("./course.model");
const addCourseIntoDB = async (payload) => {
    const result = new course_model_1.CourseModel(payload);
    await result.save();
    // result have same data as payload
    const startDateString = new Date(result.startDate);
    const endDateString = new Date(result.endDate);
    const timeDifference = endDateString.getTime() - startDateString.getTime();
    const durationInWeeks = Math.ceil(timeDifference / (7 * 24 * 60 * 60 * 1000));
    const newResult = { ...payload, durationInWeeks: durationInWeeks };
    return (0, globalResponse_1.default)(true, 201, "Course created successfully", newResult);
};
const getAllCourses = async (params) => {
};
exports.courseService = {
    addCourseIntoDB,
    getAllCourses
};
