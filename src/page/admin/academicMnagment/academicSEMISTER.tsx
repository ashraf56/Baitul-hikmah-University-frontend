/* eslint-disable react-hooks/rules-of-hooks */
import { useGetsemisterQuery } from "../../../redux/features/academicSemister/academicsemisterApi";

const academicSEMISTER = () => {
    const { data } = useGetsemisterQuery(undefined)
    console.log(data);

    return (
        <div>
            <h1>semister</h1>
        </div>
    );
};

export default academicSEMISTER;