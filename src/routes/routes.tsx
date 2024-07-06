import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../page/About";
import Contact from "../page/Contact";
import { Adminroutes } from "./admin.routes";


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
        children:Adminroutes
    }

])



export default router