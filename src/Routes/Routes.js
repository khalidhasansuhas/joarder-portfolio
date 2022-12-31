import { createBrowserRouter } from "react-router-dom";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Home from "../components/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/home',
                element:<Home></Home>
            },
            {
                path: '/experience',
                element: <Experience></Experience>
            },
            {
                path: '/education',
                element: <Education></Education>
            },
        ]
    }
])

export default router;