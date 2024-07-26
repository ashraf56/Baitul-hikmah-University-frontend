/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { useLoginsMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authslice";
import { verifyToken } from "../utills/verifyToken";
import { TUser } from "../Types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import CustomForm from "../components/form/CustomForm";
import CustomInput from "../components/form/CustomInput";

const Login = () => {

    const dispatch = useAppDispatch()
    const [login] = useLoginsMutation()

 const navigate = useNavigate()

    const onsubmit = async (data: any) => {
        const toast1 = toast.loading('loading...', {duration:2000})  
        try {
    
        const userInfo = {
            id: data.id,
            password: data.password
        }
        const res = await login(userInfo).unwrap()
        const user = verifyToken(res.data.accessToken) as TUser
        dispatch(setUser({ user: user, token: res.data.accessToken }))
        toast.success('Logged in', { id: toast1, duration: 2000 });
        navigate(`/${user.role}/dashboard`)
      
      } catch (error) {
        toast.error('Faild to log in', { id:toast1, duration: 2000 });
      
      }

    }

    

    return (
       
            <Row  justify={'center'}  align={'middle'} style={{height:'100vh'}}>
            <CustomForm onSubmit={onsubmit} >
         
                    <CustomInput type={'text'} name={'id'} label={'ID'}/>
                
             
                    <CustomInput type={'text'} name={'password'} label={'Password'}/>
                
                <Button htmlType="submit">Login</Button>
            </CustomForm>
            </Row>
       
    );
};

export default Login;