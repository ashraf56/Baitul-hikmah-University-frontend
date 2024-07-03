import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../page/About";
import Contact from "../page/Contact";
import AdminDashboard from "../page/admin/AdminDashboard";
import CreateStudent from "../page/admin/CreateStudent";


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
        children: [
            {
                index: true,
                element: <AdminDashboard />
            },
            {
                path: 'create-student',
                element: <CreateStudent />
            },
        ]
    }

])



export default router