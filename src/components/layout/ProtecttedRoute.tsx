import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { useCurrentToken } from "../../redux/features/auth/authslice";
import { Navigate } from "react-router-dom";

const ProtecttedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken)

  if (!token) {
    return <Navigate to='/login' replace={true} />
  }
  return children
};

export default ProtecttedRoute;