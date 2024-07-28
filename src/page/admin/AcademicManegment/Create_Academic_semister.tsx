import { Button, Col, Flex } from "antd";
import CustomForm from "../../../components/form/CustomForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomSelect from "../../../components/form/CustomSelect";

export const semesterOptions = [
    { value: '01', label: 'Autumn' },
    { value: '02', label: 'Summar' },
    { value: '03', label: 'Fall' },
];

const currentYear = new Date().getFullYear()
console.log(currentYear);

const yearOptons = [0,1,2,3,4,5,6].map(y=>({
    value:String(currentYear+y),
    label:String(currentYear+y)
}))
const Create_Academic_semister = () => {
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        //taking label dynamically

        const name = semesterOptions[Number(data.name) - 1]?.label
        const semistardata = {
            name,
            code: data.name,
            year: data.year

        }
        console.log(semistardata);

    }
    return (
        <div>
            <Flex justify="center" align="center">
                <Col span={6}>
                    <CustomForm
                        onSubmit={onSubmit} >
                        <CustomSelect label="Name" name="name" options={semesterOptions} />
                        <CustomSelect label="Year" name="year" options={yearOptons} />
                        <Button htmlType="submit">Submit</Button>
                    </CustomForm>
                </Col>
            </Flex>
        </div>
    );
};

export default Create_Academic_semister;