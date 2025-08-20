import React, { useState } from 'react'
import { FaMapMarker } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import {  NavLink } from 'react-router-dom';
const Jobs = ({ job }) => {
  if (!job) return null; // Prevent crash if job is undefined
  
  const[showFullDescription,setShowFullDescription]=useState(false)
  let description=job.description;
  if(!showFullDescription)
  {
    description=description.substring(0,90)+'...';

  }


  return (
    <>
    <div className='  relative bg-zinc-200 shadow-md rounded-lg p-6 mt-[10%]'>
      <h3 className='text-xl mt-2 font-semibold mb-2'>{job.title}</h3>
      <p className='text-gray-700  mt-2 flex items-center gap-2'><FaBuilding className='text-sky-600' />{job.company.name}</p>
      <p className='text-red-600 flex  mt-2 items-center gap-2' ><FaMapMarker  className='text-red-600' />{job.location}</p>
      <p className='text-green-600 font-bold  mt-2' >Salary:{job.salary}</p>
      <p className='text-sm text-gray-600  mt-2'>Type: {job.type || 'N/A'}</p>
      <p className='text-sm text-gray-600 font-semibold text-justify mt-2 '>Description: {description || 'N/A'}</p>
      <button onClick={()=>setShowFullDescription((prevs)=>!prevs)}>{showFullDescription?'Less':'Read More'}</button>
      <p className='text-sm text-gray-600  mt-2 mb-7'>PostedAt: {job.postedAt || 'N/A'}</p>
      <div className="  flex items-center justify-center ">
       <NavLink to={`/jobs/${job.id} `}><button className='absolute cursor-pointer bg-sky-600 rounded-2xl py-4 flex items-center justify-center px-5 top-[88%] left-[40%] bottom-2 text-center '> More Details</button></NavLink>
      </div>

    </div>

    </>
  );
};

export default Jobs;

