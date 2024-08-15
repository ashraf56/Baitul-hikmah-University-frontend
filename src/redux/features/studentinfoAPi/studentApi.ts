/* eslint-disable @typescript-eslint/no-explicit-any */
import { studentInterface, TQueryParam, TResponseRedux } from "../../../Types";
import { baseapi } from "../../api/baseApi";



const studentApi = baseapi.injectEndpoints({
    endpoints:(build)=>({
        getAllstudent: build.query({
            query: (args) => {
               const params=new URLSearchParams()


               if (args) {
                args.forEach((element:TQueryParam) => {
                    params.append(element.name,element.value as string)
                });
               }
             
               return   {
                url: '/students',
                method: "GET",
                params:params
            } 
            }
        ,
            transformResponse:(response: TResponseRedux<studentInterface[]>)=>{
              
                return {
                    data:response.data,
                    meta:response.meta
                }
            }
        }),
        AddStudent: build.mutation({
            query:(data)=>({
                url:'/users/create-student',
                method:"POST",
                body:data
            })
        })
       
    })
})


export const {useAddStudentMutation , useGetAllstudentQuery}=studentApi