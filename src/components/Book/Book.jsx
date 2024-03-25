import { useEffect, useState } from "react";

const Book = () => {

        const [jobs, setJobs] = useState([]);


        useEffect( () => {
                fetch('jobs.json')
                .then(res => res.json())
                .then(data => setJobs(data))
          }
        )
        return (
                <div>
                     <h2>this book</h2>   
                </div>
        );
};

export default Book;