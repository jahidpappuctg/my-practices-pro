import { useEffect, useState } from "react";

 
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
                      <h2>this FeaturedJobs: {jobs.length}</h2>  
                </div>
        );
};

export default FeaturedJobs;