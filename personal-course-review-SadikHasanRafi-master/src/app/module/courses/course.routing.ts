import { Router } from "express";
import { courseController } from "./course.controller";

const courseRoutes = Router()

courseRoutes.post("/course",courseController.createCourse)
courseRoutes.get("/courses",courseController.getAllCourses)
courseRoutes.put("/:courseId",courseController.updateSingleCourse)
courseRoutes.get("/:courseId/reviews",courseController.getSingleCourseWithReview)
courseRoutes.get("/course/best")

export default courseRoutes