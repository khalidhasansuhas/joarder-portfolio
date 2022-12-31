import { createBrowserRouter } from "react-router-dom";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Teaching from "../components/Teaching";
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
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/achievements',
                element: <Achievements></Achievements>
            },
            {
                path: '/teaching',
                element: <Teaching></Teaching>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },

        ]
    }
])

export default router;