"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_controller_1 = require("./review.controller");
const reviewRouter = (0, express_1.Router)();
reviewRouter.post("/", review_controller_1.reviewController.addNewReview);
exports.default = reviewRouter;
