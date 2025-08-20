import React, { useEffect, useState } from 'react'
import job from '../JobData/Job.json'
import Jobs from '../JobListings/Jobs'
const JobListings = ( {isHome=false}) => {
    
    
    const [jobData,setJobData]=useState([])
    // Fetching jobs from localStorage
    // This will run only once when the component mounts
    useEffect(()=>{
       const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
      try {
        const data = JSON.parse(storedJobs);
        setJobData(data);
      } catch (error) {
        console.error('Error parsing localStorage jobs:', error);
      }
    }
    },[])
    console.log(jobData)
    const JobLists= isHome ? jobData.slice(-3).reverse(): jobData;
    return (
    <div>
       <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center capitalize'>
        {isHome ? 'Recent Jobs':'browse Jobs'}
        </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {jobData && jobData.length > 0 ? (
            // Map through the jobData array and render Jobs components
            
            JobLists.map((jobItem) => (  
              <Jobs key={jobItem.id} job={jobItem} />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No jobs found.</p>
          )}
          </div>
          
      </div>
    </section>
    </div>
  )
}

export default JobListings
