import { NextFunction } from "express"
import catchAsync from "../../utilities/catchAsync"


const addNewReview = catchAsync(async (req:Request,res:Response,next:NextFunction)=>{

})


export const reviewController = {
    addNewReview
}