import { Table, TableColumnsType, TableProps } from "antd";
import { useGetsemisterQuery } from "../../../../redux/features/academicSemister/academicsemisterApi";
import { TAcademicSemester, TQueryParam } from "../../../../Types";
import { useState } from "react";

type Ttabledata = Pick<TAcademicSemester, 'name' | 'year' | 'startMonth' | 'endMonth'>




const Academic_semister = () => {
    const [params, Setparams] = useState<TQueryParam[] | undefined>(undefined)

    const { data, isLoading, isFetching } = useGetsemisterQuery(params)
    const tableInfo = data?.data?.map(({ _id, name, startMonth, endMonth, year }) => (
        {
            key: _id,
            name,
            startMonth,
            endMonth,
            year,
        }
    ))


    const columns: TableColumnsType<Ttabledata> = [
        {
            title: 'Name',
            dataIndex: 'name',
            filters: [
                {
                    text: 'Fall',
                    value: 'Fall'
                },
                {
                    text: 'Autumn',
                    value: 'Autumn'
                },
                {
                    text: 'Summar',
                    value: 'Summar'
                },
            ],
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.name.includes(value as string),
            width: '30%',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            // sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Start Month',
            dataIndex: 'startMonth',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            // onFilter: (value, record) => record.address.startsWith(value as string),
            // filterSearch: true,
            // width: '40%',
        },
        {
            title: 'End Month',
            dataIndex: 'endMonth',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            // onFilter: (value, record) => record.address.startsWith(value as string),
            // filterSearch: true,
            // width: '40%',
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

    if (isLoading) {
        return <p>Loading....</p>
    }


    return (
        <Table loading={isFetching} columns={columns} dataSource={tableInfo} onChange={onChange} />
    );
};

export default Academic_semister;