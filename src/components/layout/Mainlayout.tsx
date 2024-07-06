import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Mainlayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const items = [
        {
            key: 'home',
            icon: <UserOutlined />,
            label: <NavLink to={'/'}>home</NavLink>,
        },
        {
            key: 'about',
            icon: <VideoCameraOutlined />,
            label: <NavLink to={'/about'}>home</NavLink>,
        },
        {
            key: 'admin',
            icon: <UploadOutlined />,
            label: 'admin',
            children: [
                {
                    key: 'AdminDashboard',
                    icon: <UserOutlined />,
                    label: <NavLink to={'/admin/dashboard'}>admin dashboard</NavLink>,
                },
                {
                    key: 'contact',
                    icon: <VideoCameraOutlined />,
                    label: <NavLink to={'/contact'}>contact</NavLink>,
                },
                {
                    key: 'createstudent',
                    icon: <VideoCameraOutlined />,
                    label: <NavLink to={'/admin/create-student'}>create student</NavLink>,
                }
            ]
        },
    ]

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
                    items={items}
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