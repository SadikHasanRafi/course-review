"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseValidation = void 0;
const zod_1 = require("zod");
const tagSchemaValidation = zod_1.z.object({
    name: zod_1.z.string(),
    isDeleted: zod_1.z.boolean(),
});
const detailsSchemaValidation = zod_1.z.object({
    level: zod_1.z.string(),
    description: zod_1.z.string(),
});
const addCourseSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        instructor: zod_1.z.string(),
        categoryId: zod_1.z.string(),
        price: zod_1.z.number(),
        startDate: zod_1.z.string(),
        endDate: zod_1.z.string(),
        language: zod_1.z.string(),
        provider: zod_1.z.string(),
        durationInWeeks: zod_1.z.string().optional(),
        tags: zod_1.z.array(tagSchemaValidation),
        details: detailsSchemaValidation
    }),
});
exports.courseValidation = {
    addCourseSchemaValidation,
};
