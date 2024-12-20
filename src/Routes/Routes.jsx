import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CourseDetail from "../Pages/CourseDetail/CourseDetail";
  

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/", 
            element: <Home/>
        }, 
        {
          path: '/course/:id', 
          element: <CourseDetail/>
        }       
      ]
    },
  ]);