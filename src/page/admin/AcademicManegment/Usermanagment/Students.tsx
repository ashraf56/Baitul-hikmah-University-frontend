/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllstudentQuery } from "../../../../redux/features/studentinfoAPi/studentApi";
import { studentInterface, TQueryParam } from "../../../../Types";
import { useState } from "react";

type Ttabledata = Pick<studentInterface, '_id' | 'name' | 'id' | 'email' | 'contactnumber'> | undefined | any

const Students = () => {
    const [params, Setparams] = useState<TQueryParam[]>([])
    const [page, setPage] = useState(1);

    const { data, isLoading } = useGetAllstudentQuery([
        { name: 'limit', value: 3 },
        { name: 'page', value: page },
        { name: 'sort', value: 'id' },
        ...params,
    ], { pollingInterval: 3000 })

    console.log(data);
    const metaData = data?.meta;

    const tableInfo = data?.data?.map(({ _id, name, id, email, contactnumber }) => (
        {
            key: _id,
            id,
            name,
            email,
            contactnumber

        }
    ))


    const columns: TableColumnsType<Ttabledata> = [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Contact Number',
            dataIndex: 'contactnumber',

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
    const onChange: TableProps<Ttabledata>['onChange'] = (_pagination, filters, _sorter, extra) => {

        if (extra.action === 'filter') {

            const Querys: TQueryParam[] = []

            filters.name?.forEach(n => (
                Querys.push({ name: 'name', value: n })
            ))
            Setparams(Querys)
        }


    };

    return (
        <div>
            <Table loading={isLoading} columns={columns} pagination={false} dataSource={tableInfo} onChange={onChange} />
            <Pagination
                current={page}
                onChange={(value) => setPage(value)}
                pageSize={metaData?.limit}
                total={metaData?.total}
            />
        </div>
    );
};

export default Students;