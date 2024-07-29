import { baseapi } from "../../api/baseApi";


const academicFacultyApi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        addAcademicFaculty: build.mutation({
            query: (data) => ({
                url: '/academicfaculty/create-academicfaculty',
                method: 'POST',
                body: data
            })
        })

    })

})



export const { useAddAcademicFacultyMutation } = academicFacultyApi