import AdminDashboard from "../page/admin/AdminDashboard";
import CreateStudent from "../page/admin/AcademicManegment/Usermanagment/CreateStudent";
import Academic_semister from "../page/admin/AcademicManegment/AcademicSemester/Academic_semister";
import Create_Academic_semister from "../page/admin/AcademicManegment/AcademicSemester/Create_Academic_semister";
import All_AcademicFaculty from "../page/admin/AcademicManegment/AcademicFaculty/All_AcademicFaculty";
import CreateAcademicFaculty from "../page/admin/AcademicManegment/AcademicFaculty/CreateAcademicFaculty";
import CreateAdepartment from "../page/admin/AcademicManegment/AcademicDepartment/CreateAdepartment";
import AllAcademicDepartment from "../page/admin/AcademicManegment/AcademicDepartment/AllAcademicDepartment";
import Students from "../page/admin/AcademicManegment/Usermanagment/Students";
import Create_semester_registration from "../page/admin/CourseManagement/Create_semester_registration";





export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />,
    },
    {
        name: 'Academic Management',
        children: [
            {
                name: 'Add  semister',
                path: 'create-academic-semister',
                element: <Create_Academic_semister />,
            },
            {
                name: 'Acamdemic semister',
                path: 'academic-semister',
                element: <Academic_semister />,
            },
            {
                name: 'Add Acamdemic Faculty',
                path: 'create-academic-faculty',
                element: <CreateAcademicFaculty />,
            },
            {
                name: 'Acamdemic Faculty',
                path: 'academic-faculty',
                element: <All_AcademicFaculty />,
            },
            {
                name: 'Create  Department',
                path: 'create-academic-department',
                element: <CreateAdepartment />,
            },
            {
                name: 'Academic  Department',
                path: 'academic-department',
                element: <AllAcademicDepartment />,
            }
        ]
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
                name: 'Students',
                path: 'students',
                element: <Students />,
            },
        ],
    },
    {
        name: 'Course Management',
        children: [
            {
                name: 'Create Semester Registration',
                path: 'create-semester-registration',
                element: <Create_semester_registration />,
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