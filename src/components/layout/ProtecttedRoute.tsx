import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { useCurrentoken } from "../../redux/features/auth/authslice";
import { Navigate } from "react-router-dom";

const ProtecttedRoute = ({children}:{children:ReactNode}) => {
    const token = useAppSelector(useCurrentoken)

    if (!token) {
        <Navigate to={'/logn'} replace={true} />
    }
  return children
};

export default ProtecttedRoute;