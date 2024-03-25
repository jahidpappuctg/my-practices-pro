 
const Books = () => {
        return (
                <div>
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
                                jobs.slice(0, dataLenght).map(job => <Job key={job.id} job = {job} ></Job>)
                        }
                </div>
                <div className={dataLenght === jobs.length && 'hidden'}>   
                        <button onClick={()=> setDatalength(jobs.length) } className="btn btn-primary"> Show All Jobs</button>
                </div>
        </div>
);
                </div>
        );
};

export default Books;