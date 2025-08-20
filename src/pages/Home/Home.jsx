import React from 'react'
import Hero from '../../componets/hero/Hero'
import Navbar from '../../componets/Navbar/Navbar'
import HomeCards from '../../componets/HomeCards/HomeCards'
import JobListings from '../../JobListings/JobListings'
import ViewJobsAll from '../../componets/ViewAllJobs/ViewJobsAll'

const Home = ({job}) => {
    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <HomeCards />
            <JobListings  isHome={true} />
            <ViewJobsAll />
        </>
    )
}

export default Home
