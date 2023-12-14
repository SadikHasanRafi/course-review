import { Router } from "express";
import { reviewController } from "./review.controller";


const reviewRouter = Router()

 reviewRouter.post("/",reviewController.addNewReview)


 export default reviewRouter