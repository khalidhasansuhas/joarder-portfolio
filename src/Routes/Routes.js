import { createBrowserRouter } from "react-router-dom";
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
            }
        ]
    }
])

export default router;