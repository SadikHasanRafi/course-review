import { Request, Response, Router } from "express"
import courseRoutes from "../module/courses/course.routing"




 const router = Router()

 const allRoutes = [
    {
        path:"/",
        route:courseRoutes
    }
 ]

 allRoutes.map((route)=> router.use(route.path,route.route))

export default router