/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";

import { useForm } from "react-hook-form";
import { useLoginsMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authslice";
import { verifyToken } from "../utills/verifyToken";

const Login = () => {

    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm()
    const [login,{error}] = useLoginsMutation()

  console.log(error);
  
    const onsubmit = async (data: any) => {

        const userInfo = {
            id: data.id,
            password: data.password
        }
        const res = await login(userInfo).unwrap()
        const user = verifyToken(res.data.accessToken)
        dispatch(setUser({ user: user, token: res.accessToken }))

    }
    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div>
                    <label htmlFor="id">ID: </label>
                    <input type="text" id="id" {...register('id')} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" {...register('password')} />
                </div>
                <Button htmlType="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;