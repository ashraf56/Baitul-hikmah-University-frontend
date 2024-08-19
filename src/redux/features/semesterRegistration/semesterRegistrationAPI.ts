import { baseapi } from "../../api/baseApi";


const semesterRegistrationAPi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        addSemeterRegistration: build.mutation({
            query: (data) => ({
                url: '/semister-reg/create-semester-registration',
                method: "POST",
                body: data
            })
        })
    }),
})




export const {useAddSemeterRegistrationMutation} = semesterRegistrationAPi