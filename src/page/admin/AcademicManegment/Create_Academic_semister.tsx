import { Button, Col, Flex } from "antd";
import CustomForm from "../../../components/form/CustomForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomSelect from "../../../components/form/CustomSelect";
import { monthOptions } from "../../../constants/global";

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
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        //taking label dynamically

        const name = semesterOptions[Number(data.name) - 1]?.label
        const semistardata = {
            name,
            code: data.name,
            year: data.year,
            startMonth:data.startMonth,
            endMonth:data.endMonth

        }
        console.log(semistardata);

    }
    return (
        <div>
            <Flex justify="center" align="center">
                <Col span={6}>
                    <CustomForm
                        onSubmit={onSubmit} >
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