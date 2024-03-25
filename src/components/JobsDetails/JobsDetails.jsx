import { useLoaderData, useParams } from "react-router-dom";

const JobsDetails = () => {
        const jobs = useLoaderData()
        const {id} = useParams()
        const job = jobs.find(job => job.id === id);
        console.log(job);

        return (
                <div>
                <h2>this job deatils</h2>
                </div>
        );
};

export default JobsDetails;