import { Link } from "react-router-dom";

import { MdOutlineLocationOn } from "react-icons/md";
import { PiCurrencyDollarThin } from "react-icons/pi";


const Job = (job) => {
  const {logo, id, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
  console.log(job.id);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}!</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-3">{remote_or_onsite}</button>    
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]">{job_type}</button>    
        </div>
        <div className="flex">
             <h2 ><MdOutlineLocationOn className="text-2xl">{location} </MdOutlineLocationOn></h2> 
             <h2 ><PiCurrencyDollarThin className="text-2xl">{salary} </PiCurrencyDollarThin></h2> 
        </div>
        <div className="card-actions ">
                
        <Link to={`/job/${id}`}>
         
         <button className="btn btn-primary ">View Details</button> 
         </Link>
         
        </div>
               
      </div>
    </div>
  );
};

export default Job;
