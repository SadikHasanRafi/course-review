import mongoose from "mongoose";
import { ReviewI } from "./review.interface";
import { ReviewModel } from "./review.model";

const addReviewIntoDB = async (payload:ReviewI) =>{
    const result = new ReviewModel(payload)
    await result.save()
    const {courseId,rating,review} = result
    return {courseId,rating,review}
}


export const reviewService = {
    addReviewIntoDB
}