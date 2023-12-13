"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/router/routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//root function
const rootRoute = async (req, res) => {
    res.send("Hello from course review server.");
};
app.use("/api", routes_1.default);
app.get("/", rootRoute);
exports.default = app;
// /api/course
// /api/course
// /api/categories
// /api/categories
// /api/course/best
// /api/courses/:courseId
// /api/courses/:courseId/reviews
// /api/reviews
