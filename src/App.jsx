import React, { useEffect } from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/hero/Hero'
import HomeCards from './componets/HomeCards/HomeCards'
import JobListings from './JobListings/JobListings'
import Jobs from './JobListings/Jobs'
import job from './JobData/Job.json'




const App = () => {
  useEffect(()=>{
  localStorage.setItem("jobs",JSON.stringify(job))
},[])
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HomeCards/>
      <JobListings jobs={job}/>
      <Jobs/>
    </div>
  )
}

export default App
