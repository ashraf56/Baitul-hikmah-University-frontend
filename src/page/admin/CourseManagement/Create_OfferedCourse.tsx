/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import CustomForm from "../../../components/form/CustomForm";
import CustomSelect from "../../../components/form/CustomSelect";
import CustomDatePicker from "../../../components/form/CustomDatePicker";
import CustomInput from "../../../components/form/CustomInput";
import { useGetRegisteredsemesterQuery } from "../../../redux/features/semesterRegistration/semesterRegistrationAPI";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAcademicFacultyQuery } from "../../../redux/features/academicFaculty/academicFaculty";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/academicDepartment/academicDepartmentApi";
import { useGetFacultyQuery } from "../../../redux/features/facaultyapi/facultyAPI";

const Create_OfferedCourse = () => {
    const { data: regSem, isLoading:semesterreg } = useGetRegisteredsemesterQuery(undefined)
    const semesterOptions = regSem?.data?.map((item:any) => ({
        value: item._id,
        label: `${item.academicSemester.name} ${item.academicSemester.year}`,
      }));
      const { data:academicfac, isLoading:acfacultyLoading } = useGetAcademicFacultyQuery(undefined)

      const acfacultyOptions = academicfac?.data?.map((item:any) => ({
        value: item._id,
        label: item.name ,
      }));

      const {data:Acdep, isLoading:acdeploading}= useGetAllAcademicDepartmentQuery(undefined)


      const Acdepoption = Acdep?.data?.map((item:any) => ({
        value: item._id,
        label: item.name ,
      }));

      const {data:facultiesData} = useGetFacultyQuery(undefined)

      const facultyOptions = facultiesData?.data?.map((item:any) => ({
        value: item._id,
        label: `${item.fullName}` ,
      }));

      const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    
       
    
        console.log(data);
        
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
                        <CustomSelect placeholder='Select semister' label="Academic Semester" name="academicSemester" options={semesterOptions} />
                        <CustomSelect placeholder='Select Faculty' label="Academic Faculty" name="academicFaculty" options={acfacultyOptions} />
                        <CustomSelect placeholder='Select Department' label="Academic Department" name="academicDepartment" options={Acdepoption} />
                        <CustomSelect placeholder='Select course' label="Course" name="course" options={Acdepoption} />
                        <CustomSelect placeholder='Select course' label="Fcaulties" name="Fcaulties" options={facultyOptions} />
                       <CustomDatePicker name="startDate" label="Start Date" />
                       <CustomDatePicker name="endDate" label="End Date" />
                       <CustomInput type="text" name="minCredit" label="min Credit" placeholder="enter min Credit" />
                       <CustomInput type="text" name="maxCredit" label="Max Credit" placeholder="enter Max Credit" />
                        <Button htmlType="submit">Submit</Button>
                    </CustomForm>
                </Col>
            </Flex>
        </div>
    );
};

export default Create_OfferedCourse;