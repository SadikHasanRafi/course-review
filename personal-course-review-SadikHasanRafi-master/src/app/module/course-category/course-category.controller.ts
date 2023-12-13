import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utilities/catchAsync";

const addNewCourseCategory = catchAsync(async (req:Request,res:Response,next:NextFunction)=>{

})

const getAllCourseCategory = catchAsync(async (req:Request,res:Response,next:NextFunction)=>{

})


export const courseCategoryController = {
    addNewCourseCategory,
    getAllCourseCategory
}