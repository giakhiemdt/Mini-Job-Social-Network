import { createBrowserRouter, type RouteObject } from "react-router-dom";
import HomePage from "../app/Guest/Homepage/Homepage";

const routes: RouteObject[] = [    // dùng RouteObject[] vì routes là mảng
  {
    path: "/",
    element: <HomePage/>,        
  },
  {
    path: "/home-page",
    element: <HomePage/>,        
  },
];

const router = createBrowserRouter(routes);

export default router;
 