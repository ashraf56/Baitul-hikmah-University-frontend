import { Table, TableColumnsType, TableProps } from "antd";
import { useGetsemisterQuery } from "../../../redux/features/academicSemister/academicsemisterApi";
import { TAcademicSemester } from "../../../Types";

type Ttabledata= Pick<TAcademicSemester,'name'|'year'|'startMonth'|'endMonth'>




const Academic_semister = () => {
    const { data,isLoading } = useGetsemisterQuery([
        {name:'year',value:'2024'}
    ])
    console.log(data);
    const tableInfo = data?.data?.map(({ _id, name, startMonth, endMonth, year })=>(
        { key:_id,
            name,
            startMonth,
            endMonth,
            year,
        }
    ))

if (isLoading) {
    return <p>Loading....</p>
}

    const columns: TableColumnsType<Ttabledata> = [
        {
            title: 'Name',
            dataIndex: 'name',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Category 1',
                    value: 'Category 1',
                    children: [
                        {
                            text: 'Yellow',
                            value: 'Yellow',
                        },
                        {
                            text: 'Pink',
                            value: 'Pink',
                        },
                    ],
                },
                {
                    text: 'Category 2',
                    value: 'Category 2',
                    children: [
                        {
                            text: 'Green',
                            value: 'Green',
                        },
                        {
                            text: 'Black',
                            value: 'Black',
                        },
                    ],
                },
            ],
            // filterMode: 'tree',
            // filterSearch: true,
            // onFilter: (value, record) => record.name.includes(value as string),
            // width: '30%',
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
    
const onChange: TableProps<Ttabledata>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
    return (
        <Table columns={columns} dataSource={tableInfo} onChange={onChange} />
    );
};

export default Academic_semister;