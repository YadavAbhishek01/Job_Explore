import React from 'react'
import { FaMapMarker } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
const Jobs = ({ job }) => {
  if (!job) return null; // Prevent crash if job is undefined

  return (
    <>
    <div className='  relative bg-white shadow-md rounded-lg p-6 mt-[30%]'>
      <h3 className='text-xl mt-2 font-semibold mb-2'>{job.title}</h3>
      <p className='text-gray-700  mt-2 flex items-center gap-2'><FaBuilding />{job.company}</p>
      <p className='text-gray-500 flex  mt-2 items-center gap-2' ><FaMapMarker />{job.location}</p>
      <p className='text-green-600 font-bold  mt-2' >Salary:{job.salary}</p>
      <p className='text-sm text-gray-600  mt-2'>Type: {job.type || 'N/A'}</p>
      <p className='text-sm text-gray-600 font-semibold text-justify mt-2 '>Description: {job.description || 'N/A'}</p>
      <p className='text-sm text-gray-600  mt-2 mb-7'>PostedAt: {job.postedAt || 'N/A'}</p>
      <div className=" relative flex items-center justify-center mt-5">
        <button className='absolute bg-sky-600 rounded-2xl py-2 px-5'>Read More</button>
      </div>

    </div>

    </>
  );
};

export default Jobs;

