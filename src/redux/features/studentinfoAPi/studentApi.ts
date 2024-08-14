import { baseapi } from "../../api/baseApi";



const studentApi = baseapi.injectEndpoints({
    endpoints:(build)=>({
        AddStudent: build.mutation({
            query:(data)=>({
                url:'/users/create-student',
                method:"POST",
                body:data
            })
        })
    })
})


export const {useAddStudentMutation}=studentApi