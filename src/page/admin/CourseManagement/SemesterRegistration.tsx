/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { useGetRegisteredsemesterQuery } from "../../../redux/features/semesterRegistration/semesterRegistrationAPI";
import { useState } from "react";




const items = [
    {
      label: 'Upcoming',
      key: 'UPCOMING',
    },
    {
      label: 'Ongoing',
      key: 'ONGOING',
    },
    {
      label: 'Ended',
      key: 'ENDED',
    },
  ];
  

const SemesterRegistration = () => {
    const [semesterId, setSemesterId] = useState('');
    console.log(semesterId);
    
const {data, isLoading}= useGetRegisteredsemesterQuery(undefined)

    const tableInfo = data?.data?.map(({ _id, academicSemester, status, startDate, endDate }:any) => (
        {
            key: _id,
           name: `${academicSemester.name} ${academicSemester.year}`,
           startDate,
           endDate,
           status
        }
    ))
    const menuProps = {
        items,
       
      };

    const columns: TableColumnsType<any> = [
        {
            title: 'Name',
            dataIndex: 'name',
           
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (item) => {
                let color;
                if (item === 'UPCOMING') {
                  color = 'blue';
                }
                if (item === 'ONGOING') {
                  color = 'green';
                }
                if (item === 'ENDED') {
                  color = 'red';
                }
        
                return <Tag color={color}>{item}</Tag>;
              },
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
           
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
        },
        {
            title: 'Action',
            key: 'x',
            render: (item) => {
              return (
                <Dropdown menu={menuProps} trigger={['click']}>
                  <Button onClick={() => setSemesterId(item.key)}>Update</Button>
                </Dropdown>
              );
            },
          },
       
    ];

    return (
        <div>
             <Table loading={isLoading} columns={columns} dataSource={tableInfo}  />
        </div>
    );
};

export default SemesterRegistration;