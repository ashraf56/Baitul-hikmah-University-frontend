import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hook';
import { logout } from '../../redux/features/auth/authslice';
const { Header, Content } = Layout;




const Mainlayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useAppDispatch()
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();




    return (
        <Layout style={{ height: '100vh' }}>
            <Sidebar></Sidebar>
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
                    <Button onClick={()=>dispatch(logout())}>Logout</Button>
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