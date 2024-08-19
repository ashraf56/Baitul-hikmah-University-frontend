/* eslint-disable @typescript-eslint/no-explicit-any */
import { TQueryParam, TResponseRedux } from "../../../Types";
import { baseapi } from "../../api/baseApi";


const courseApi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        getCourse: build.query({
            query: (args) => {
                const params = new URLSearchParams()


                if (args) {
                    args.forEach((element: TQueryParam) => {
                        params.append(element.name, element.value as string)
                    });
                }

                return {
                    url: '/course',
                    method: "GET",
                    params: params
                }
            }
            ,
            transformResponse: (response: TResponseRedux<any>) => {

                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
        addCourse: build.mutation({
            query: (data) => ({
                url: '/course/create-course',
                method: "POST",
                body: data
            })
        }),
      
    }),

})




export const {
 useAddCourseMutation, useGetCourseQuery } = courseApi