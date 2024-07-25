import { baseapi } from "../../api/baseApi";

const authApi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        logins: build.mutation({
            query: (userInfo) => ({
                url: 'auth/login',
                method: "POST",
                body: userInfo
            })
        })
    }),
})


export const { useLoginsMutation } = authApi;

