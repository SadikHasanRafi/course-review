"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseCategoryController = void 0;
const catchAsync_1 = __importDefault(require("../../utilities/catchAsync"));
const addNewCourseCategory = (0, catchAsync_1.default)(async (req, res, next) => {
});
const getAllCourseCategory = (0, catchAsync_1.default)(async (req, res, next) => {
});
exports.courseCategoryController = {
    addNewCourseCategory,
    getAllCourseCategory
};
