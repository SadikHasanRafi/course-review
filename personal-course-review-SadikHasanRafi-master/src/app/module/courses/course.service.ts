import { CourseI } from "./course.interface";
import { CourseModel } from "./course.model";

const addCourseIntoDB = async (payload:CourseI) => {
    
    const coursesM = new CourseModel(payload)
    await coursesM.save()


    console.log(payload)
    return payload
}



export const courseService = {
    addCourseIntoDB
}