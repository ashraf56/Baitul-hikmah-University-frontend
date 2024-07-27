import { Button, Col, Flex } from "antd";
import CustomForm from "../../../components/form/CustomForm";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Create_Academic_semister = () => {
    const onSubmit: SubmitHandler<FieldValues>  = async (data)=>{
        console.log(data);
        
    }
    return (
        <div>
           <Flex justify="center" align="center">
      <Col span={6}>
        <CustomForm
          onSubmit={onSubmit} >
          
          <Button htmlType="submit">Submit</Button>
        </CustomForm>
      </Col>
    </Flex>
        </div>
    );
};

export default Create_Academic_semister;