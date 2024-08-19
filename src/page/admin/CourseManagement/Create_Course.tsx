import { Button, Col, Flex } from "antd";
import CustomForm from "../../../components/form/CustomForm";
import CustomSelect from "../../../components/form/CustomSelect";
import CustomInput from "../../../components/form/CustomInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetCourseQuery } from "../../../redux/features/courseapi/courseapi";

const Create_Course = () => {


    const { data: Crs } = useGetCourseQuery(undefined)


    const courseOption = Crs?.data?.map((item) => ({
        value: item._id,
        label: item.title,
    }));


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        //taking label dynamically

        const semistarRegdata = {
            ...data,
            credits: Number(data.credits),
            code: Number(data.code),
            prefix: data.prefix,
            isDeleted: false,
            preRequisiteCourses: data.preRequisiteCourses ? data.preRequisiteCourses?.map((item) => ({
                course: item,
                isDeleted: false,
            }))
                : [],

        }

        console.log(semistarRegdata);

        // const toastId = toast.loading('Creating...');

        // try {

        //     const res = await addSemeterRegistration(semistarRegdata) as TResponse<any>
        //     if (res.error) {
        //         toast.error(res.error?.data?.message, { id: toastId })
        //     } else {
        //         toast.success("Semester created", { id: toastId })
        //     }

        // } catch (error) {
        //     toast.error('something error', { id: toastId })
        // }

    }
    return (
        <div>
            <Flex justify="center" align="center">
                <Col span={8}>
                    <CustomForm
                        onSubmit={onSubmit}  >

                        <CustomSelect mode="multiple" placeholder='Select semister' label="Status" name="preRequisiteCourses" options={courseOption} />

                        <CustomInput type="text" name="title" label="title" placeholder="enter title" />
                        <CustomInput type="text" name="prefix" label="prefix" placeholder="enter  prefix" />
                        <CustomInput type="text" name="code" label="code" placeholder="enter  code" />
                        <CustomInput type="text" name="credits" label="credits" placeholder="enter  credits" />
                        <Button htmlType="submit">Submit</Button>
                    </CustomForm>
                </Col>
            </Flex>
        </div>
    );
};

export default Create_Course;