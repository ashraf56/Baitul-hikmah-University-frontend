import Contact from "../page/Contact";
import StudentDashboard from "../page/student/StudentDashboard";

export  const studentpath  = [
    {
        name: 'Contact',
        path: 'contact',
        element: <Contact />,
    },
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <StudentDashboard />,
    },
    {
        name: 'semister',
        path: 'semister',
        element: <StudentDashboard />
    },
    
    
]