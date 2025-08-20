import React, { useEffect } from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/hero/Hero'
import HomeCards from './componets/HomeCards/HomeCards'
import JobListings from './JobListings/JobListings'
import Jobs from './JobListings/Jobs'
import job from './JobData/Job.json'
import ViewJobsAll from './componets/ViewAllJobs/ViewJobsAll'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import MainLayout from './Layout/MainLayout'
import Jobspage from './pages/Jobs/Jobspage'
import AddJob from './pages/AddJobs/AddJob'
import NotFound from './pages/NotFoundpage/NotFound'
import JobDetailspage from './pages/Jobs/JobDetailspage'
import EditDetails from './pages/EditDetails/EditDetails'



const App = () => {
useEffect(() => {
  const existingJobs = localStorage.getItem("jobs");
  if (!existingJobs) {
    localStorage.setItem("jobs", JSON.stringify(job)); // initial job data from Job.json
  }
}, []);
  return (
    <div>
      <MainLayout>
     <Routes>

      <Route path='/' element={<Home job={job}/>}/>
         <Route path={`/jobs`} element={<Jobspage/>}/>
           <Route path={`/jobs/:id`} element={<JobDetailspage/>}/>
           <Route path='/add-job' element={<AddJob/>}/>
            <Route path='/edit-job/:id' element={<EditDetails/>}/>
            <Route path='*' element={<NotFound/>}/>
    </Routes>
      </MainLayout>
   

   
    </div>
  )
}

export default App
