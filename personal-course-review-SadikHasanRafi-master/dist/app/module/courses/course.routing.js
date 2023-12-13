"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_controller_1 = require("./course.controller");
const dataValidator_1 = __importDefault(require("../../utilities/dataValidator"));
const course_validation_1 = require("./course.validation");
const courseRoutes = (0, express_1.Router)();
courseRoutes.post("/course", (0, dataValidator_1.default)(course_validation_1.courseValidation.addCourseSchemaValidation), course_controller_1.courseController.createCourse);
courseRoutes.get("/courses", course_controller_1.courseController.getAllCourses);
courseRoutes.put("/:courseId", course_controller_1.courseController.updateSingleCourse);
courseRoutes.get("/:courseId/reviews", course_controller_1.courseController.getSingleCourseWithReview);
courseRoutes.get("/course/best");
exports.default = courseRoutes;
