/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableColumnsType } from "antd";
import { useGetAcademicFacultyQuery } from "../../../../redux/features/academicFaculty/academicFaculty";

const All_AcademicFaculty = () => {
    const { data, isLoading } = useGetAcademicFacultyQuery(undefined,{ pollingInterval:1000 })
   
    
    const tableInfo = data?.data?.map(({ _id, name }:any)=> (
        {
            key: _id,
            name,
           
        }
    ))


    const columns: TableColumnsType<any> = [
        {
            title: 'Name',
            dataIndex: 'name',
        
        },
        
       
    ]

  

    

    return (
        <div>
          <Table loading={isLoading} columns={columns} dataSource={tableInfo}  />
        </div>
    );
};

export default All_AcademicFaculty;