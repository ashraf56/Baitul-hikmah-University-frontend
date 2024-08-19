/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import CustomForm from "../../../../components/form/CustomForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomSelect from "../../../../components/form/CustomSelect";
import { monthOptions } from "../../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../../schemas/academicSemisterZod";
import { useCreateAsemisterMutation } from "../../../../redux/features/academicSemister/academicsemisterApi";
import { toast } from "sonner";
import { TResponse } from "../../../../Types";

export const semesterOptions = [
    { value: '01', label: 'Autumn' },
    { value: '02', label: 'Summar' },
    { value: '03', label: 'Fall' },
];

const currentYear = new Date().getFullYear()
const yearOptons = [0, 1, 2, 3, 4, 5, 6].map(y => ({
    value: String(currentYear + y),
    label: String(currentYear + y)
}))

const Create_Academic_semister = () => {

    const [createAsemister] = useCreateAsemisterMutation()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        //taking label dynamically

        const name = semesterOptions[Number(data.name) - 1]?.label
        const semistardata = {
            name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth

        }
        const toastId = toast.loading('Creating...');

        try {
            console.log(semistardata);
            const res = await createAsemister(semistardata) as TResponse<any>
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
                <Col span={6}>
                    <CustomForm
                        onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}  >
                        <CustomSelect placeholder='Select semister' label="Name" name="name" options={semesterOptions} />
                        <CustomSelect placeholder="Select year" label="Year" name="year" options={yearOptons} />
                        <CustomSelect placeholder="Select StartMonth" label="StartMonth" name="startMonth" options={monthOptions} />
                        <CustomSelect placeholder="Select endMonth" label="endMonth" name="endMonth" options={monthOptions} />
                        <Button htmlType="submit">Submit</Button>
                    </CustomForm>
                </Col>
            </Flex>
        </div>
    );
};

export default Create_Academic_semister;