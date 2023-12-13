import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utilities/catchAsync";
import { courseService } from "./course.service";

const createCourse =  catchAsync(async (req:Request,res:Response,next:NextFunction)=>{

    const result = await courseService.addCourseIntoDB(req.body)
    res.send(result)

})






























const getAllCourses = catchAsync(async (req:Request,res:Response,next:NextFunction)=>{
    console.log("working fine")
    res.send("working fine")
})

const updateSingleCourse = catchAsync(async (req:Request,res:Response,next:NextFunction)=>{

})

const getSingleCourseWithReview = catchAsync(async (req:Request,res:Response,next:NextFunction)=>{

})

const getBestCoursesByRating = catchAsync(async (req:Request,res:Response,next:NextFunction)=>{

})

export const courseController = {
    createCourse,
    getAllCourses,
    updateSingleCourse,
    getSingleCourseWithReview,
    getBestCoursesByRating
}

