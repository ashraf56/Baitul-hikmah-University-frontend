
import { TAcademicSemester, TResponseRedux } from "../../../Types";
import { baseapi } from "../../api/baseApi";

const academicSemisterApi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        getsemister: build.query({
            query: () => ({
                url: '/academicsemister',
                method: "GET",
            }),
            transformResponse:(response:TResponseRedux<TAcademicSemester[]>)=>{
              
                return {
                    data:response.data,
                    meta:response.meta
                }
            }
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

