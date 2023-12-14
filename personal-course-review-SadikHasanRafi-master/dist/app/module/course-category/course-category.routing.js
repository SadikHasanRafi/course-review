"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_category_controller_1 = require("./course-category.controller");
const courseCategoryRoutes = (0, express_1.Router)();
courseCategoryRoutes.post("/", course_category_controller_1.courseCategoryController.addNewCourseCategory);
courseCategoryRoutes.get("/", course_category_controller_1.courseCategoryController.getAllCourseCategory);
exports.default = courseCategoryRoutes;
