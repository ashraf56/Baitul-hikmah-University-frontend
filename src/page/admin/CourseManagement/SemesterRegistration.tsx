/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { useGetRegisteredsemesterQuery, useUpdateRegisteredSemesterMutation } from "../../../redux/features/semesterRegistration/semesterRegistrationAPI";
import { useState } from "react";
import moment from "moment";




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
 const [updateRegisteredSemester] = useUpdateRegisteredSemesterMutation()
    const { data:regSem, isLoading } = useGetRegisteredsemesterQuery(undefined)

    const tableInfo = regSem?.data?.map(({ _id, academicSemester, status, startDate, endDate }: any) => (
        {
            key: _id,
            name: `${academicSemester.name} ${academicSemester.year}`,
            startDate: moment(new Date(startDate)).format('MMMM'),
            endDate: moment(new Date(endDate)).format('MMMM'),
            status
        }
    ))

    const handleStatusUpdate = (data) => {
        const updateData = {
          id: semesterId,
          data: {
            status: data.key,
          },
        };
    
        updateRegisteredSemester(updateData);
      };

    const menuProps = {
        items,
        onClick: handleStatusUpdate,

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
            <Table loading={isLoading} columns={columns} dataSource={tableInfo} />
        </div>
    );
};

export default SemesterRegistration;