
import { Button, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hook';
import { logout } from '../../redux/features/auth/authslice';
const { Header, Content } = Layout;




const Mainlayout: React.FC = () => {
    const dispatch = useAppDispatch()
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();




    return (
        <Layout >
            <Sidebar ></Sidebar>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                   
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