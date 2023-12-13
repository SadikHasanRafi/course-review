"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModel = void 0;
const mongoose_1 = require("mongoose");
const TagsSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
    },
});
const CourseDetailsSchema = new mongoose_1.Schema({
    level: {
        type: String,
    },
    description: {
        type: String,
    },
});
const CourseSchema = new mongoose_1.Schema({
    title: {
        type: String,
        unique: true,
    },
    instructor: {
        type: String,
    },
    categoryId: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    price: {
        type: Number,
    },
    tags: {
        type: [TagsSchema],
    },
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
    language: {
        type: String,
    },
    provider: {
        type: String,
    },
    durationInWeeks: {
        type: Number,
    },
    details: {
        type: CourseDetailsSchema,
    },
});
exports.CourseModel = (0, mongoose_1.model)("Course", CourseSchema);
