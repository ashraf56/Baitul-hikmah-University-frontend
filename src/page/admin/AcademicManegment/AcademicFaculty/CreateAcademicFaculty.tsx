import { Button, Col, Flex } from "antd";
import CustomForm from "../../../../components/form/CustomForm";
import CustomInput from "../../../../components/form/CustomInput";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicFaculty = () => {


const onSubmit: SubmitHandler<FieldValues> = async (data)=>{
    const toastId = toast.loading('Creating...');

    try {
        console.log(data);
        // if (res.error) {
        //     toast.error(res.error?.data?.message, { id: toastId })
        // } else {
        //     toast.success("Semester created", { id: toastId })
        // }

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