/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableColumnsType } from "antd";
import { useGetAllAcademicDepartmentQuery } from "../../../../redux/features/academicDepartment/academicDepartmentApi";


type Ttabledata = {
    name: string;
}

const AllAcademicDepartment = () => {
    const {data, isLoading}= useGetAllAcademicDepartmentQuery(undefined,{pollingInterval:3000})

    const tableInfo = data?.data?.map(({ _id, name}:any) => (
        {
            key: _id,
            name,
           
        }
    ))

    const columns: TableColumnsType<Ttabledata> = [
        {
            title: 'Name',
            dataIndex: 'name',
          
        
        }
    
        
    ];

 
    return (
        <div>
             <Table loading={isLoading} columns={columns} dataSource={tableInfo}  />
        </div>
    );
};

export default AllAcademicDepartment;