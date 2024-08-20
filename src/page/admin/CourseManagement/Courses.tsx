/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Space, Table, TableColumnsType } from "antd";
import { useGetCourseQuery } from "../../../redux/features/courseapi/courseapi";

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
                console.log(item);
                return (
                    <Space>

                        <Button>Details</Button>

                        <Button>Update</Button>
                        <Button>Block</Button>
                    </Space>
                );
            },
            width: '1%',
        },

    ];
  
    return (
        <div>
             <Table loading={isLoading} columns={columns} pagination={false} dataSource={tableInfo} />
        </div>
    );
};

export default Courses;