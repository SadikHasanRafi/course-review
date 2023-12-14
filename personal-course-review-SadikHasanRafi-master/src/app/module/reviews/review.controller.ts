import { NextFunction, Request, Response } from "express"
import catchAsync from "../../utilities/catchAsync"
import { reviewService } from "./review.service"
import globalResponse from "../../utilities/globalResponse";


const addNewReview = catchAsync(async (req:Request,res:Response,next:NextFunction)=>{
    console.log(req.body);
    const result = await reviewService.addReviewIntoDB(req.body)
    res.send(globalResponse(true,201,"Review created successfully",result))
})


export const reviewController = {
    addNewReview
}
