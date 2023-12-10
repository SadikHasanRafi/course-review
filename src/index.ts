import express, { Application, Request, Response } from "express";

const app: Application = express()


//root function
const rootRoute = async (req:Request,res:Response)=>{
    res.send("Hello from root route")
}






app.get("/",rootRoute)






export default app;