import { useEffect, useState } from "react";
import Job from "../Job/Job";

 
const FeaturedJobs = () => {

        const [jobs, setJobs] = useState([]);

        useEffect( () => {
              fetch('jobs.json')
              .then(res => res.json())
              .then(data => setJobs(data))
        }
                ,[])

        return (
                <div>
                        <div>
                                <h2>this FeaturedJobs: {jobs.length}</h2>  
                        </div>
                        <div className="grid grid-cols-2 mx-auto">
                                {
                                        jobs.map(job => <Job key={job.id} job = {job} ></Job>)
                                }
                        </div>
                </div>
        );
};

export default FeaturedJobs;
 