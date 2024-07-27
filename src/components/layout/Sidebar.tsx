import { Layout, Menu } from "antd";
import DaynamicSidebar from "../../utills/DaynamicSidebar";
import { adminPaths } from "../../routes/admin.routes";
import { facultypath } from "../../routes/faculty.routes";
import { studentpath } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authslice";

const { Sider } = Layout;
const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
}
const Sidebar = () => {
    //geting user role from state 
    const user = useAppSelector(selectCurrentUser)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userDBrole = (user! as any).role

    let sidebaritems;
    switch (userDBrole) {
        case userRole.ADMIN:
            sidebaritems = DaynamicSidebar(adminPaths, userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sidebaritems = DaynamicSidebar(facultypath, userRole.FACULTY)
            break;
        case userRole.STUDENT:
            sidebaritems = DaynamicSidebar(studentpath, userRole.STUDENT)
            break;

        default:
            break;
    }
    return (
        <Sider trigger={null} collapsible  >

            <div style={{ textAlign: 'center', paddingBottom: '5px' }}>
                <h1 style={{ color: 'white' }}>BH </h1>
            </div>

            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={sidebaritems}
            />
        </Sider>
    );
};

export default Sidebar;