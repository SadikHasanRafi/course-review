import express, { Application, Request, Response } from "express";
import routes from "./router/routes";

const app: Application = express();

//root function
const rootRoute = async (req: Request, res: Response) => {
  res.send("Hello from root route.");
};



app.use("", routes);
app.get("/", rootRoute);

export default app;


// /api/course
// /api/course
// /api/categories
// /api/categories
// /api/reviews
// /api/courses/:courseId
// /api/courses/:courseId/reviews
// /api/course/best