import {  Router } from "express";
import { courseCategoryController } from "./course-category.controller";

const courseCategoryRoutes = Router()


courseCategoryRoutes.post("/",courseCategoryController.addNewCourseCategory)
courseCategoryRoutes.get("/",courseCategoryController.getAllCourseCategory)



export default courseCategoryRoutes