import { z } from "zod";

const tagSchemaValidation = z.object({
  name: z.string(),
  isDeleted: z.boolean(),
});

const detailsSchemaValidation = z.object({
  level: z.string(),
  description: z.string(),
});

const addCourseSchemaValidation = z.object({
  body: z.object({
    title: z.string(),
    instructor: z.string(),
    categoryId: z.string(),
    price: z.number(),
    startDate: z.string(),
    endDate: z.string(),
    language: z.string(),
    provider: z.string(),
    durationInWeeks: z.string().optional(),
    tags: z.array(tagSchemaValidation),
    details: detailsSchemaValidation
  }),
});

export const courseValidation = {
  addCourseSchemaValidation,
};
