import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../page/About";
import Contact from "../page/Contact";
import DynamicRoute from "../utills/DynamicRoute";
import { adminPaths } from "./admin.routes";


const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    },
    {
        path: '/admin',
        element: <App />,
        children:DynamicRoute(adminPaths)
    }

])



export default router