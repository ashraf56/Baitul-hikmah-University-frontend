import AdminDashboard from "../page/admin/AdminDashboard";
import CreateStudent from "../page/admin/CreateStudent";



export const adminroutes = [
    {
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        path: 'create-student',
        element: <CreateStudent />
    },
]