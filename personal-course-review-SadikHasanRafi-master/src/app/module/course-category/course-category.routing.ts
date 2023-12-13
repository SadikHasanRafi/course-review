import {  Router } from "express";
import { courseCategoryController } from "./course-category.controller";

const courseCategoryRoutes = Router()


courseCategoryRoutes.get("/",courseCategoryController.addNewCourseCategory)
courseCategoryRoutes.post("/",courseCategoryController.getAllCourseCategory)



export default courseCategoryRoutes