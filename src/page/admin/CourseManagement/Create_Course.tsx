/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import CustomForm from "../../../components/form/CustomForm";
import CustomSelect from "../../../components/form/CustomSelect";
import CustomInput from "../../../components/form/CustomInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddCourseMutation, useGetCourseQuery } from "../../../redux/features/courseapi/courseapi";
import { toast } from "sonner";
import { TResponse } from "../../../Types";

const Create_Course = () => {

 const [addCourse] = useAddCourseMutation()
    const { data: Crs } = useGetCourseQuery(undefined)


    const courseOption = Crs?.data?.map((item:any) => ({
        value: item._id,
        label:` ${item.prefix}${item.code}`,
    }));


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        //taking label dynamically

        const Coursedata = {
            ...data,
            credits: Number(data.credits),
            code: Number(data.code),
            prefix: data.prefix,
            isDeleted: false,
            preRequisiteCourses: data.preRequisiteCourses ? data.preRequisiteCourses?.map((item:any) => ({
                course: item,
                isDeleted: false,
            }))
                : [],

        }

        console.log(Coursedata);

        const toastId = toast.loading('Creating...');

        try {

            const res = await addCourse(Coursedata) as TResponse<any>
            if (res.error) {
                toast.error(res.error?.data?.message, { id: toastId })
            } else {
                toast.success("Course created", { id: toastId })
            }

        } catch (error) {
            toast.error('something error', { id: toastId })
        }

    }
    return (
        <div>
            <Flex justify="center" align="center">
                <Col span={8}>
                    <CustomForm
                        onSubmit={onSubmit}  >


                        <CustomInput type="text" name="title" label="title" placeholder="enter title" />
                        <CustomInput type="text" name="prefix" label="prefix" placeholder="enter  prefix" />
                        <CustomInput type="text" name="code" label="code" placeholder="enter  code" />
                        <CustomInput type="text" name="credits" label="credits" placeholder="enter  credits" />
                        <CustomSelect mode="multiple" placeholder='Select preRequisiteCourses' label="PreRequisite Courses" name="preRequisiteCourses" options={courseOption} />
                        <Button htmlType="submit">Submit</Button>
                    </CustomForm>
                </Col>
            </Flex>
        </div>
    );
};

export default Create_Course;