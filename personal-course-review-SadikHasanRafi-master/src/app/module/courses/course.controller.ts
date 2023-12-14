import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utilities/catchAsync";
import { courseService } from "./course.service";

const createCourse =  catchAsync(async (req:Request,res:Response,next:NextFunction)=>{
    const result = await courseService.addCourseIntoDB(req.body)
    res.send(result)

})







const getAllCourses = catchAsync(async (req:Request,res:Response,next:NextFunction) => {
    	const result =await courseService.getAllCourses(req.query)
    	res.send(result)
	})


















    const getSingleCourseWithReview = catchAsync(async (req:Request,res:Response,next:NextFunction)=>{
        const result = await courseService.getCourseAndReviews(req.params)
        res.send(result)
    })
































const updateSingleCourse = catchAsync(async (req:Request,res:Response,next:NextFunction)=>{

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

