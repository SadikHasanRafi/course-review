"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync = (fn) => {
    return (req, res, next) => {
        try {
            return (fn(req, res, next));
        }
        catch (error) {
            console.log("🚀 ~ file: catchAsync.ts:10 ~ return ~ error:", error);
        }
    };
};
exports.default = catchAsync;
