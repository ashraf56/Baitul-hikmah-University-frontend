
import { baseapi } from "../../api/baseApi";

  const academicSemisterApi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        getsemister: build.query({
            query: () => ({
                url: '/academicsemister',
                method: "GET",
            })
        })
    }),
})


export const { useGetsemisterQuery } = academicSemisterApi;

