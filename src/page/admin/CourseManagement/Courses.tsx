/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, Space, Table, TableColumnsType } from "antd";
import { useGetCourseQuery } from "../../../redux/features/courseapi/courseapi";
import { useState } from "react";
import CustomForm from "../../../components/form/CustomForm";
import CustomSelect from "../../../components/form/CustomSelect";
import { useGetFacultyQuery } from "../../../redux/features/facaultyapi/facultyAPI";

const Courses = () => {
    const { data: Crs,isLoading } = useGetCourseQuery(undefined)
    const tableInfo = Crs?.data?.map(({ _id, title, prefix,code}:any) => (
        {
            key: _id,
           title,
           code:`${prefix}${code}`

        }
    ))


    const columns: TableColumnsType<any> = [
      
        {
            title: 'Name',
            dataIndex: 'title',

        },
        {
            title: 'Code',
            dataIndex: 'code',

        },
       
        {
            title: 'Action',
            render: (item) => {
                return <AddFacultyModal facultyInfo={item} />;
              },
        
        },

    ];
  
    return (
        <div>
             <Table loading={isLoading} columns={columns} pagination={false} dataSource={tableInfo} />
        </div>

        
    );
};

const AddFacultyModal = ({ facultyInfo }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);   
   const {data:facultiesData} = useGetFacultyQuery(undefined)
    const facultiesOption = facultiesData?.data?.map((item) => ({
      value: item._id,
      label: item.fullName,
    }));
  
    const handleSubmit = (data) => {
      const facultyData = {
        courseId: facultyInfo.key,
        data,
      };
  
      console.log(facultyData);
  
     
    };
  
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
        <Button onClick={showModal}>Add Faculty</Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <CustomForm onSubmit={handleSubmit}>
            <CustomSelect
              mode="multiple"
              options={facultiesOption}
              name="faculties"
              label="Faculty"
            />
            <Button htmlType="submit">Submit</Button>
          </CustomForm>
        </Modal>
      </>
    )
}
export default Courses;