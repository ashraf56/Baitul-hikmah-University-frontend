import AdminDashboard from "../page/admin/AdminDashboard";
import CreateStudent from "../page/admin/CreateStudent";
import { NavLink } from "react-router-dom";
import { TSidebarItem } from "../Types/alltypes";




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






// export const Adminroutes = adminPaths.reduce((acc: TRoute[], item) => {

//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }
//     if (item.children) {
//         item.children.forEach((child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element,
//             });
//         });
//     }

//     return acc
// }, [])





export const adminSidebarItems = adminPaths.reduce(
    (acc: TSidebarItem[], item) => {
      if (item.path && item.name) {
        acc.push({
          key: item.name,
          label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
        });
      }
  
      if (item.children) {
        acc.push({
          key: item.name,
          label: item.name,
          children: item.children.map((child) => ({
            key: child.name,
            label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
          })),
        });
      }
  
      return acc;
    },
    []
  );





//   const items = [
//     {
//         key: 'home',
//         icon: <UserOutlined />,
//         label: <NavLink to={'/'}>home</NavLink>,
//     },
//     {
//         key: 'about',
//         icon: <VideoCameraOutlined />,
//         label: <NavLink to={'/about'}>home</NavLink>,
//     },
//     {
//         key: 'admin',
//         icon: <UploadOutlined />,
//         label: 'admin',
//         children: [
//             {
//                 key: 'AdminDashboard',
//                 icon: <UserOutlined />,
//                 label: <NavLink to={'/admin/dashboard'}>admin dashboard</NavLink>,
//             },
//             {
//                 key: 'contact',
//                 icon: <VideoCameraOutlined />,
//                 label: <NavLink to={'/contact'}>contact</NavLink>,
//             },
//             {
//                 key: 'createstudent',
//                 icon: <VideoCameraOutlined />,
//                 label: <NavLink to={'/admin/create-student'}>create student</NavLink>,
//             }
//         ]
//     },
// ]