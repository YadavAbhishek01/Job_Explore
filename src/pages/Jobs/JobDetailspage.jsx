import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ESModulesEvaluator } from 'vite/module-runner';
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
const JobDetailspage = () => {

  const { id } = useParams(); 

  const jobdetials=JSON.parse(localStorage.getItem('jobs'))
  if (!jobdetials) {
    return <div>No job details available</div>;
  }
  const jobdata=jobdetials.find((job)=>String(job.id)===id)
  console.log(jobdata);
  // Assuming jobdetials is an array of job objects 
  // You can filter or find the specific job based on the id
  // const jobdetails = jobdetials.find(job => job.id === id);    
  // console.log(jobdetails);

  const onDeleteClick = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this job?');    
    if (confirmDelete) {
      const updatedJobs = jobdetials.filter(job => job.id !== id);
      localStorage.setItem('jobs', JSON.stringify(updatedJobs));
      window.location.href = '/jobs'; // Redirect to the jobs page after deletion
    }
  }
  return (
   <>
    <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/jobs'
            className='text-indigo-500 hover:text-indigo-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>{jobdata.type}</div>
                <h1 className='text-3xl font-bold mb-4'>{jobdata.title}</h1>
                <div className='text-gray-500 mb-4 flex items-center justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1 flex items-center justify-center' />
                  <p className='text-orange-700 flex items-center justify-center font-semibold  '>{jobdata.location}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                  Job Description
                </h3>

                <p className='mb-4'>{jobdata.description}</p>

                <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                  Salary
                </h3>

                <p className='mb-4'>{jobdata.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Company Info</h3>

                <h2 className='text-2xl'>{jobdata.company.name}</h2>

                <p className='my-2'>{jobdata.company.description}</p>

                <hr className='my-4' />

                <h3 className='text-xl'>Contact Email:</h3>

                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {jobdata.company.contactEmail}
                </p>

                <h3 className='text-xl'>Contact Phone:</h3>

                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {' '}
                  {jobdata.company.contactPhone}
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage Job</h3>
                <Link
                  to={`/edit-job/${jobdata.id}`}
                  className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(jobdata.id)}
                  className='bg-red-500  cursor-pointer hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
   </>
  )
}

export default JobDetailspage
