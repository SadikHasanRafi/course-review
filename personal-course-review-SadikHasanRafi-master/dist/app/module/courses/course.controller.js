"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseController = void 0;
const catchAsync_1 = __importDefault(require("../../utilities/catchAsync"));
const course_service_1 = require("./course.service");
const createCourse = (0, catchAsync_1.default)(async (req, res, next) => {
    const result = await course_service_1.courseService.addCourseIntoDB(req.body);
    res.send(result);
});
const getAllCourses = (0, catchAsync_1.default)(async (req, res, next) => {
    const result = await course_service_1.courseService.getAllCourses(req.params);
    res.send(result);
});
const updateSingleCourse = (0, catchAsync_1.default)(async (req, res, next) => {
});
const getSingleCourseWithReview = (0, catchAsync_1.default)(async (req, res, next) => {
});
const getBestCoursesByRating = (0, catchAsync_1.default)(async (req, res, next) => {
});
exports.courseController = {
    createCourse,
    getAllCourses,
    updateSingleCourse,
    getSingleCourseWithReview,
    getBestCoursesByRating
};
