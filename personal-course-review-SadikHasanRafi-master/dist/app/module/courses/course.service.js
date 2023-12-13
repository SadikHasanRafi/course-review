"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseService = void 0;
const course_model_1 = require("./course.model");
const addCourseIntoDB = async (payload) => {
    const coursesM = new course_model_1.CourseModel(payload);
    await coursesM.save();
    console.log(payload);
    return payload;
};
exports.courseService = {
    addCourseIntoDB
};
