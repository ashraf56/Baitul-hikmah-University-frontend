/* eslint-disable @typescript-eslint/no-explicit-any */
import { TQueryParam, TResponseRedux } from "../../../Types";
import { baseapi } from "../../api/baseApi";


const FacultyApi = baseapi.injectEndpoints({
    endpoints: (build) => ({
        getFaculty: build.query({
            query: (args) => {
                const params = new URLSearchParams()


                if (args) {
                    args.forEach((element: TQueryParam) => {
                        params.append(element.name, element.value as string)
                    });
                }

                return {
                    url: '/faculty',
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
      
    }),

})




export const {useGetFacultyQuery } = FacultyApi