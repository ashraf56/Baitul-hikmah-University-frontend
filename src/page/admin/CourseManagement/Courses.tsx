/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal,  Table, TableColumnsType } from "antd";
import { useAddAsignFacultiesMutation, useGetCourseQuery } from "../../../redux/features/courseapi/courseapi";
import { useState } from "react";
import CustomForm from "../../../components/form/CustomForm";
import CustomSelect from "../../../components/form/CustomSelect";
import { useGetFacultyQuery } from "../../../redux/features/facaultyapi/facultyAPI";
import { TResponse } from "../../../Types";
import { toast } from "sonner";

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

const AddFacultyModal = ({ facultyInfo }:any) => {
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [addAsignFaculties] = useAddAsignFacultiesMutation()
    
   const {data:facultiesData} = useGetFacultyQuery(undefined)
    const facultiesOption = facultiesData?.data?.map((item: { _id: any; fullName: any; }) => ({
      value: item._id,
      label: item.fullName,
    }));
  
    const handleSubmit = async (data: any) => {
      const facultyData = {
        id: facultyInfo.key,
        data,
      };
      const toastId = toast.loading('Asigning...');
      try {

        const res = await addAsignFaculties(facultyData) as TResponse<any>
        if (res.error) {
            toast.error(res.error?.data?.message, { id: toastId })
        } else {
            toast.success("Course faulty asigned ", { id: toastId })
        }

    } catch (error) {
        toast.error('something error', { id: toastId })
    }
     
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
          title={facultyInfo.title}
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