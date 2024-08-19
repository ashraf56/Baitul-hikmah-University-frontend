/* eslint-disable @typescript-eslint/no-explicit-any */
import { TQueryParam, TResponseRedux } from "../../../Types";
import { baseapi } from "../../api/baseApi";


const semesterRegistrationAPi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        getRegisteredsemester: build.query({
            query: (args) => {
               const params=new URLSearchParams()


               if (args) {
                args.forEach((element:TQueryParam) => {
                    params.append(element.name,element.value as string)
                });
               }
             
               return   {
                url: '/semister-reg',
                method: "GET",
                params:params
            } 
            }
        ,
            transformResponse:(response:TResponseRedux<any>)=>{
              
                return {
                    data:response.data,
                    meta:response.meta
                }
            }
        }),
        addSemeterRegistration: build.mutation({
            query: (data) => ({
                url: '/semister-reg/create-semester-registration',
                method: "POST",
                body: data
            })
        })
    }),
})




export const {useAddSemeterRegistrationMutation,useGetRegisteredsemesterQuery} = semesterRegistrationAPi