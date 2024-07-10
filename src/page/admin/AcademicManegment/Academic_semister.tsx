import { useGetsemisterQuery } from "../../../redux/features/academicSemister/academicsemisterApi";

const Academic_semister = () => {
    const {data} = useGetsemisterQuery(undefined)
    console.log(data);
    
    return (
        <div>
            academic semister
        </div>
    );
};

export default Academic_semister;