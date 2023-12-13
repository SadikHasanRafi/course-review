"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_routing_1 = __importDefault(require("../module/courses/course.routing"));
const router = (0, express_1.Router)();
const allRoutes = [
    {
        path: "/",
        route: course_routing_1.default
    }
];
allRoutes.map((route) => router.use(route.path, route.route));
exports.default = router;
