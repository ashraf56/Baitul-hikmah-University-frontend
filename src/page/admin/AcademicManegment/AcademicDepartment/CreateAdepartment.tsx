/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import CustomForm from "../../../../components/form/CustomForm";
import CustomSelect from "../../../../components/form/CustomSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAcademicFacultyQuery } from "../../../../redux/features/academicFaculty/academicFaculty";
import CustomInput from "../../../../components/form/CustomInput";

const CreateAdepartment = () => {

    const {data:Afaculty} = useGetAcademicFacultyQuery(undefined)


    const faculTyOptions = Afaculty?.data?.map((item: any) => ({
        value: item._id,
        label: item.name,
      }));
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        
console.log(data);

        
       

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