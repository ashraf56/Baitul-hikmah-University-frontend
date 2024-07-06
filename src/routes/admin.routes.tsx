import { ReactNode } from "react";
import AdminDashboard from "../page/admin/AdminDashboard";
import CreateStudent from "../page/admin/CreateStudent";



export const adminroutesss = [
    {
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        path: 'create-student',
        element: <CreateStudent />
    },
]

export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />,
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />,
            },
            {
                name: 'Create Member',
                path: 'create-member',
                element: <CreateStudent />,
            },
        ],
    },
];



type TRoute = {
    path: string;
    element: ReactNode;
};


export const Adminroutes = adminPaths.reduce((acc: TRoute[], item) => {

    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element
        })
    }
    if (item.children) {
        item.children.forEach((child) => {
            acc.push({
                path: child.path,
                element: child.element,
            });
        });
    }

    return acc
}, [])