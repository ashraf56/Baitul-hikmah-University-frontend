/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import CustomForm from "../../../../components/form/CustomForm";
import CustomSelect from "../../../../components/form/CustomSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAcademicFacultyQuery } from "../../../../redux/features/academicFaculty/academicFaculty";
import CustomInput from "../../../../components/form/CustomInput";
import { useCreateAcademicDepartmentMutation } from "../../../../redux/features/academicDepartment/academicDepartmentApi";
import { toast } from "sonner";

const CreateAdepartment = () => {
    const [createAcademicDepartment] = useCreateAcademicDepartmentMutation()

    const { data: Afaculty } = useGetAcademicFacultyQuery(undefined)


    const faculTyOptions = Afaculty?.data?.map((item: any) => ({
        value: item._id,
        label: item.name,
    }));
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const toastId = toast.loading('Creating...');

        try {
            const res = await createAcademicDepartment(data) as any
            if (res.error) {
                toast.error(res.error?.data?.message, { id: toastId })
            } else {
                toast.success("Department created", { id: toastId })
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
                        onSubmit={onSubmit}   >

                        <CustomInput type="text" placeholder="Enter name" name="name" label="Department Name" />

                        <CustomSelect placeholder='Select Faculty' label="Academic Faculty" name="academicFaculty" options={faculTyOptions} />



                        <Button htmlType="submit">Submit</Button>
                    </CustomForm>
                </Col>
            </Flex>
        </div>
    );
};

export default CreateAdepartment;