
import { baseapi } from "../../api/baseApi";

const academicSemisterApi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        getsemister: build.query({
            query: () => ({
                url: '/academicsemister',
                method: "GET",
            })
        }),
        createAsemister: build.mutation({
            query: (data) => ({
                url: '/academicsemister/create-semister',
                method: "POST",
                body:data
            })
        })
    }),
})


export const { useGetsemisterQuery, useCreateAsemisterMutation } = academicSemisterApi;

