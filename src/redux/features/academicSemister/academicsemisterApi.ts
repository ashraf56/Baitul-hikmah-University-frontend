
import { TAcademicSemester, TQueryParam, TResponseRedux } from "../../../Types";
import { baseapi } from "../../api/baseApi";

const academicSemisterApi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        getsemister: build.query({
            query: (args) => {
               const params=new URLSearchParams()


               if (args) {
                args.forEach((element:TQueryParam) => {
                    params.append(element.name,element.value as string)
                });
               }
             
               return   {
                url: '/academicsemister',
                method: "GET",
                params:params
            } 
            }
        ,
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

