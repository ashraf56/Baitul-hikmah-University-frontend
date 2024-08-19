/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import CustomForm from "../../../components/form/CustomForm";
import CustomSelect from "../../../components/form/CustomSelect";
import { useGetsemisterQuery } from "../../../redux/features/academicSemister/academicsemisterApi";
import CustomDatePicker from "../../../components/form/CustomDatePicker";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { semesterStatusOptions } from "../../../constants/global";
import CustomInput from "../../../components/form/CustomInput";
import { useAddSemeterRegistrationMutation } from "../../../redux/features/semesterRegistration/semesterRegistrationAPI";
import { toast } from "sonner";
import { TResponse } from "../../../Types";

const Create_semester_registration = () => {

const [addSemeterRegistration]= useAddSemeterRegistrationMutation()

    const {data:Asemester} = useGetsemisterQuery(undefined)


const semesterOptions = Asemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    //taking label dynamically

    const semistarRegdata = {
        academicSemester:data.academicSemester,
        minCredit: Number(data.minCredit),
        maxCredit: Number(data.maxCredit),
        status: data.status,
        startDate: data.startDate,
        endDate: data.endDate

    }

    console.log(semistarRegdata);
    
    const toastId = toast.loading('Creating...');

    try {
       
        const res = await addSemeterRegistration(semistarRegdata) as TResponse<any>
        if (res.error) {
            toast.error(res.error?.data?.message, { id: toastId })
        } else {
            toast.success("Semester created", { id: toastId })
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
                        <CustomSelect placeholder='Select semister' label="Academic Semester" name="academicSemester" options={semesterOptions} />
                        <CustomSelect placeholder='Select semister' label="Status" name="status" options={semesterStatusOptions} />
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

export default Create_semester_registration;