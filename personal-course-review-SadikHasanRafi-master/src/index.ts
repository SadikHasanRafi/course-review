import express, { Application, Request, Response } from "express";
import routes from "./app/router/routes";
import cors from 'cors';


const app: Application = express();


app.use(express.json());
app.use(cors());


//root function
const rootRoute = async (req: Request, res: Response) => {
  res.send("Hello from course review server.");
};



app.use("/api", routes);
app.get("/", rootRoute);

export default app;


// /api/course
// /api/course

// /api/categories
// /api/categories
// /api/course/best
// /api/courses/:courseId

// /api/courses/:courseId/reviews
// /api/reviews