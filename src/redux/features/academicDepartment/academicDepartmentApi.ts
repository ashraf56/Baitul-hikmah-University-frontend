import { baseapi } from "../../api/baseApi";


const academicDepartmentAPi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        createAcademicDepartment: build.mutation({
            query: (data) => ({
                url: '/department/create-department',
                method: "POST",
                body: data
            })
        }),
        getAllAcademicDepartment: build.query({
            query: () => {
                return {
                    url: '/department',
                    method: 'GET'
                }

            }
        })
    })

})

export const { useGetAllAcademicDepartmentQuery,useCreateAcademicDepartmentMutation }= academicDepartmentAPi
