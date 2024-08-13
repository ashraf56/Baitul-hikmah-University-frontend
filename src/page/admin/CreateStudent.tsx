import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../components/form/CustomForm";
import CustomInput from "../../components/form/CustomInput";
import CustomSelect from "../../components/form/CustomSelect";
import { genderOptions } from "../../constants/global";
import { useGetsemisterQuery } from "../../redux/features/academicSemister/academicsemisterApi";

const CreateStudent = () => {


const {data:Afaculty, isLoading:afLoading} = useGetsemisterQuery(undefined)


const semesterOptions = Afaculty?.data?.map((item: { _id: string , name: string, year: any }) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {




        const studentData = {
            password: 'student123',
            student: data,
        };
    console.log(studentData);
    
        const formData = new FormData();

        formData.append('data', JSON.stringify(studentData));
        formData.append('file', data.profileImg);

console.log(data.profileImg);


    }
    return (
        <div>
            <Row justify={'center'}>
                <Col span={24}>
                    <CustomForm onSubmit={onSubmit}>
                        <Divider>Personal Info</Divider>
                        <Row gutter={8}>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                                <CustomInput type="text" name="name" label="Name" ></CustomInput>
                            </Col>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                                <CustomInput type="email" name="email" label="Email" ></CustomInput>
                            </Col>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                                <CustomInput type="text" name="adress" label="Adress" ></CustomInput>
                            </Col>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                                <CustomInput type="text" name="contactnumber" label="Contact number" ></CustomInput>
                            </Col>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                                <CustomInput type="text" name="country" label="Country"  ></CustomInput>
                            </Col>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                                <CustomSelect label="Gender" name="gender" options={genderOptions} placeholder="Select gender" ></CustomSelect>
                            </Col>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                                <Controller

                                    name="profileImg"
                                    render={({ field: { onChange, value, ...field } }) => (
                                        <Form.Item label='Picture'>
                                            <Input type="file" 
                                            value={value?.fileName}
                                             {...field} 
                                             onChange={(e) => onChange(e.target.files?.[0])} />
                                        </Form.Item>
                                    )}
                                />

                            </Col>
                        </Row>
                        <Divider>Parents Info </Divider>
                        <Row gutter={8}>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                                <CustomInput type="text" name="gardian.fathersName" label="Fathers Name" ></CustomInput>
                            </Col>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                                <CustomInput type="text" name="gardian.fathersNumber" label="Fathers Number" ></CustomInput>
                            </Col>
                        </Row>
                        <Divider>Academic Info </Divider>
                        <Row gutter={8}>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomSelect label="Admission Semester" name="admissionSemester" options={semesterOptions} placeholder="Select Admission Semester" ></CustomSelect>
                            </Col>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <CustomSelect label="academicDepartment" name="academicDepartment" options={genderOptions} placeholder="Select academicDepartment" ></CustomSelect>
                            </Col>
                        </Row>
                        <Button htmlType="submit">Submit</Button>
                    </CustomForm>
                </Col>
            </Row>
        </div>
    );
};

export default CreateStudent;