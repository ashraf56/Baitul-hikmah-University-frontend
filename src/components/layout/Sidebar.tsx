import {  Layout, Menu } from "antd";
import DaynamicSidebar from "../../utills/DaynamicSidebar";
import { adminPaths } from "../../routes/admin.routes";
import { facultypath } from "../../routes/faculty.routes";
import { studentpath } from "../../routes/student.routes";

const {  Sider  } = Layout;
const userRole = {
    ADMIN:'admin',
    FACULTY:'faculty',
    STUDENT:'student'
}
const Sidebar = () => {
    const role = 'student'
let sidebaritems ;
    switch (role) {
        case  userRole.ADMIN:
            sidebaritems= DaynamicSidebar(adminPaths,userRole.ADMIN)
            break;
        case  userRole.FACULTY:
            sidebaritems= DaynamicSidebar(facultypath,userRole.FACULTY)
            break;
        case  userRole.STUDENT:
            sidebaritems= DaynamicSidebar(studentpath,userRole.STUDENT)
            break;
    
        default:
            break;
    }
    return (
        <Sider trigger={null} collapsible >

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