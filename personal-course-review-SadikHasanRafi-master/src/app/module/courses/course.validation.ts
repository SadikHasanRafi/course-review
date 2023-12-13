import { z } from "zod";




const tagSchemaValidation = z.object({
    name:z.string(),
    isDeleted:z.boolean()
})

const detailsSchemaValidation = z.object({
    level:z.string(),
    description:z.string()
})


const addCourseSchemaValidation = z.object({
    title:z.string(),
    instructor:z.string(),
    categoryId:z.string(),
    price:z.number(),
    startDate:z.string(),
    endDate:z.string(),
    language:z.string(),
    provider:z.string(),
    durationInWeeks:z.string(),
    tags:z.array(tagSchemaValidation),
    details:z.array(detailsSchemaValidation)
})

export const courseValidation = {
    addCourseSchemaValidation
}