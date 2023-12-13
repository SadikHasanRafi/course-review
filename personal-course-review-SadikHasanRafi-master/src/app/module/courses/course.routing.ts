import { Router } from "express";
import { courseController } from "./course.controller";
import dataValidator from "../../utilities/dataValidator";
import { courseValidation } from "./course.validation";

const courseRoutes = Router()

courseRoutes.post("/course",dataValidator(courseValidation.addCourseSchemaValidation),courseController.createCourse)
courseRoutes.get("/courses",courseController.getAllCourses)
courseRoutes.put("/:courseId",courseController.updateSingleCourse)
courseRoutes.get("/:courseId/reviews",courseController.getSingleCourseWithReview)
courseRoutes.get("/course/best")

export default courseRoutes