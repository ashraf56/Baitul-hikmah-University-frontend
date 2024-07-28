/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authslice";
import { toast } from "sonner";


const basequery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers;
    }
})
// refresh token retrive event
const customBaseQuerywithRefreshToken: BaseQueryFn<
FetchArgs,
BaseQueryApi,
DefinitionType
>  = async (args, api, extraOptions): Promise<any> => {
    let result = await basequery(args, api, extraOptions)
    console.log(result);
if (result.error?.status === 404) {
    toast.error(result.error.data.message)
}

    if (result.error?.status === 401) {
        const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
            method: "POST",
            credentials: "include"
        })
        const data = await res.json()
        console.log(data);

      if (data?.data?.accessToken) {
          // geting current user 
          const user = (api.getState() as RootState).auth.user

          // set current user with new token
  
          api.dispatch(
              setUser({
                  user,
                  token: data.data.accessToken
              })
          )
  
          // api recall
           result = await basequery(args, api, extraOptions)
  
      }else{
        api.dispatch(logout())
      }

    }

    return result
}

export const baseapi = createApi({
    reducerPath: 'baseapi',
    baseQuery: customBaseQuerywithRefreshToken,

    endpoints: () => ({}),
})