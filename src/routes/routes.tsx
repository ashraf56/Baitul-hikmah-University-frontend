import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../page/About";
import Contact from "../page/Contact";
import DynamicRoute from "../utills/DynamicRoute";
import { adminPaths } from "./admin.routes";
import { facultypath } from "./faculty.routes";
import { studentpath } from "./student.routes";


const router = createBrowserRouter([

    {
        path: '/',
        element: <App />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'contact',
        element: <Contact />
    },
    {
        path: '/admin',
        element: <App />,
        children:DynamicRoute(adminPaths)
    },
    {
        path: '/faculty',
        element: <App />,
        children:DynamicRoute(facultypath)
    },
    {
        path: '/student',
        element: <App />,
        children:DynamicRoute(studentpath)
    },

])



export default router