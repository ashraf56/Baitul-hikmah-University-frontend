import { baseapi } from "../../api/baseApi";


export const authApi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (userInfo) => ({
                url: 'auth/login',
                method: "POST",
                body: userInfo
            })
        })
    }),
})