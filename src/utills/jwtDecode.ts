import { jwtDecode } from "jwt-decode"

export const VerifyToken = (token:string)=>{
    jwtDecode(token)
}