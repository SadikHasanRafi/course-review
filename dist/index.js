"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//root function
const rootRoute = async (req, res) => {
    res.send("Hello from root route");
};
app.get("/", rootRoute);
exports.default = app;
