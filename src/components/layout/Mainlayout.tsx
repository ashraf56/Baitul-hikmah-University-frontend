import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { adminPaths } from '../../routes/admin.routes';
import DaynamicSidebar from '../../utills/DaynamicSidebar';
import { facultypath } from '../../routes/faculty.routes';
import { studentpath } from '../../routes/student.routes';

const { Header, Sider, Content } = Layout;


const userRole = {
    ADMIN:'admin',
    FACULTY:'faculty',
    STUDENT:'student'
}

const Mainlayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

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
        <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>

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
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Mainlayout;