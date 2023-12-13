import { NextFunction, Request, Response } from "express";



const catchAsync = (fn:Function) => {
    return (req:Request, res:Response, next:NextFunction) => {
        try {
            return (fn(req,res,next))
        } catch (error) {
            console.log("🚀 ~ file: catchAsync.ts:10 ~ return ~ error:", error)       
        }
    }
}

export default catchAsync;