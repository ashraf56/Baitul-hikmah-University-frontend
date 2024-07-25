import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";


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


export const baseapi = createApi({
    reducerPath: 'baseapi',
    baseQuery: basequery,

    endpoints: () => ({}),
})