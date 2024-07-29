/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import CustomForm from "../../../../components/form/CustomForm";
import CustomInput from "../../../../components/form/CustomInput";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../../redux/features/academicFaculty/academicFaculty";
import { TResponse } from "../../../../Types";

const CreateAcademicFaculty = () => {
const [addAcademicFaculty]= useAddAcademicFacultyMutation()

const onSubmit: SubmitHandler<FieldValues> = async (data)=>{
    const toastId = toast.loading('Creating...');

    try {
        const res = await addAcademicFaculty(data) as TResponse<any>
        if (res.error) {
            toast.error(res.error?.data?.message, { id: toastId })
        } else {
            toast.success("Academic Faculty created", { id: toastId })
        }

    } catch (error) {
        toast.error('something error', { id: toastId })
    }

}

    return (
        <div>
            <Flex justify="center" align="center">
            <Col span={12}>
            <CustomForm onSubmit={onSubmit} >
             <CustomInput name="name" label="Name" type="text" ></CustomInput>
             <Button htmlType="submit">Submit</Button>
            </CustomForm>
            </Col>
            </Flex>
        </div>
    );
};

export default CreateAcademicFaculty;