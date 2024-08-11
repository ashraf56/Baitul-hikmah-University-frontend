import { baseapi } from "../../api/baseApi";


const academicFacultyApi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        addAcademicFaculty: build.mutation({
            query: (data) => ({
                url: '/academicfaculty/create-academicfaculty',
                method: 'POST',
                body: data
            })
        }),
        GetAcademicFaculty: build.query({
            query: () => ({
                url: '/academicfaculty',
                method: 'GET',
            })
        }),

    })

})



export const { useAddAcademicFacultyMutation,useGetAcademicFacultyQuery } = academicFacultyApi