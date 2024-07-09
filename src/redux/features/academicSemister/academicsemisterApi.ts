
import { baseapi } from "../../api/baseApi";

  const academicSemisterApi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        getsemister: build.mutation({
            query: (userInfo) => ({
                url: '/academicsemister',
                method: "GET",
                body: userInfo
            })
        })
    }),
})


export const { useGetsemisterMutation } = academicSemisterApi;

