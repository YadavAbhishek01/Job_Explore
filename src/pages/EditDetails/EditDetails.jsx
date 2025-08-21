import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const EditDetails = () => {
    const { id } = useParams();
      const[jobtitle,setJobtitle] = React.useState("");
      const[jobtype,setJobtype] = React.useState(""); 
      const[jobsalary,setJobsalary] = React.useState("");
      const[joblocation,setJoblocation] = React.useState("");
      const[jobdescription,setJobdescription] = React.useState("");
      const[companyname,setCompanyname] = React.useState(""); 
      const[contactemail,setContactemail] = React.useState("");
      const[contactphone,setContactphone] = React.useState("");
      const[companydescription,setCompanydescription] = React.useState("");

     
useEffect(()=>{
    const jobdetails=JSON.parse(localStorage.getItem('jobs'))
    if (!jobdetails) {
        return <div>No job details available</div>;
    }
    const finddata=jobdetails.find((job)=>job.id === Number(id))
    if (!finddata) {
        return <div>Job not found</div>;    
    }
    setJobtitle(finddata.title);
    setJobtype(finddata.type || ""); // Default to empty string if type is undefined


    setJobsalary(finddata.salary || ""); // Default to empty string if salary is undefined
    setJoblocation(finddata.location);
    setJobdescription(finddata.description);
    setCompanyname(finddata.company.name);
    setContactemail(finddata.company.contactEmail);
    setContactphone(finddata.company.contactPhone);
    setCompanydescription(finddata.company.description);
    console.log(finddata);
},[])

const changehandler=(e)=>{
    e.preventDefault(); 
    // const jobdetails=JSON.parse(localStorage.getItem('jobs'))
    // const updatedJob = {    
    //     id: Number(id),
    //     title: jobtitle,
    //     type: jobtype,
    //     salary: jobsalary,
    //     location: joblocation,
    //     description: jobdescription,
    //     company: {
    //         name: companyname,
    //         contactEmail: contactemail,
    //         contactPhone: contactphone,
    //         description: companydescription
    //     }

    // };
    // const updatedJobs = jobdetails.map((job) =>
    //     job.id === Number(id) ? updatedJob : job
    // );
    // localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    // setJobtitle("");
    // setJobtype(""); 

    const localdata=JSON.parse(localStorage.getItem("jobs"))

    const editdetails={
        id:Number(id),
        title:jobtitle,
        type:jobtype,
        salary:jobsalary,
        location:joblocation,
        description:jobdescription,
        company:{
            name:companyname,
            contactEmail:contactemail,
            contactPhone:contactphone,
            description:companydescription
        }
       
    }
     const updatedData=localdata.map((job)=>
    job.id=== Number(id) ? editdetails :job);
    localStorage.setItem("jobs",JSON.stringify(updatedData))

    setJobtitle("");
    setJoblocation("")
    setCompanyname('')
    setCompanydescription('')
    setContactemail('')
    setContactphone('')
    setJobtype('')
    setJobsalary('')
    setJobdescription('')
    
}
  return (
    <div>
     <section className="bg-indigo-50 min-h-screen py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">Edit Job Details</h2>

          <form onSubmit={changehandler} >
            {/* Job Details Section */}
            <div className="space-y-6 mb-10">
              <h3 className="text-xl font-semibold border-b pb-2 text-gray-800">Job Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Title */}
                <div>
                  <label htmlFor="title" className="block text-gray-700 font-medium mb-1">Job Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="e.g. Frontend Developer"
                    required
                    value={jobtitle}
                    onChange={(e) => setJobtitle(e.target.value)}
                  />
                </div>

                {/* Job Type */}
                <div>
                  <label htmlFor="type" className="block text-gray-700 font-medium mb-1">Job Type</label>
                  <select
                    id="type"
                    name="type"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={jobtype}
                    onChange={(e) => setJobtype(e.target.value)}
                  >
                    <option value="">Select Type</option>
                    <option value="Full-time">Full-Time</option>
                    <option value="Part-time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                {/* Salary */}
                <div>
                  <label htmlFor="salary" className="block text-gray-700 font-medium mb-1">Salary Range</label>
                  <select
                    id="salary"
                    name="salary"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    value={jobsalary}
                    onChange={(e) => setJobsalary(e.target.value)}
                  >
                    <option value="">Select Salary</option>
                    <option value="$50K - 60K">Under $50K</option>
                    <option value="$50K - 60K">$50K - $60K</option>
                    <option value="$60K - 70K">$60K - $70K</option>
                    <option value="$70K - 80K">$70K - $80K</option>
                    <option value="$80K - 90K">$80K - $90K</option>
                    <option value="$90K - 100K">$90K - $100K</option>
                    <option value="$100K - 125K">$100K - $125K</option>
                    <option value="$125K - 150K">$125K - $150K</option>
                    <option value="$150K - 175K">$150K - $175K</option>
                    <option value="$175K - 200K">$175K - $200K</option>
                    <option value="Over $200K">Over $200K</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-gray-700 font-medium mb-1">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="e.g. San Francisco, CA"
                    required
                    value={joblocation}
                    onChange={(e) => setJoblocation(e.target.value)}
                  />
                </div>
              </div>

              {/* Job Description */}
              <div>
                <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Job Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  rows="5"
                  placeholder="Add any job duties, expectations, requirements, etc."
                  required
                  value={jobdescription}
                  onChange={(e) => setJobdescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Company Info Section */}
            <div className="space-y-6 mb-10">
              <h3 className="text-xl font-semibold border-b pb-2 text-gray-800">Company Info</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Company name"
                    required
                    value={companyname}
                    onChange={(e) => setCompanyname(e.target.value)}
                  />
                </div>

                {/* Contact Email */}
                <div>
                  <label htmlFor="contact_email" className="block text-gray-700 font-medium mb-1">Contact Email</label>
                  <input
                    type="email"
                    id="contact_email"
                    name="contact_email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Email for applicants"
                    required
                    value={contactemail}
                    onChange={(e) => setContactemail(e.target.value)} 
                  />
                </div>

                {/* Contact Phone */}
                <div>
                  <label htmlFor="contact_phone" className="block text-gray-700 font-medium mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    id="contact_phone"
                    name="contact_phone"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Phone number (optional)"
                    value={contactphone}
                    onChange={(e) => setContactphone(e.target.value)} 
                  />
                </div>
              </div>

              {/* Company Description */}
              <div>
                <label htmlFor="company_description" className="block text-gray-700 font-medium mb-1">Company Description</label>
                <textarea
                  id="company_description"
                  name="company_description"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  rows="4"
                  placeholder="What does your company do?"
                  required
                  value={companydescription}      
                  onChange={(e) => setCompanydescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div>
                
              <button
                type="submit"
                className="w-full  cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition duration-200 ease-in-out"
              >
                Save Changes
              </button>
            
              <Link to={`/jobs/${id}`}>
                <button
                type="submit"
                className="w-full  cursor-pointer bg-red-600 hover:bg-red-700 mt-1 text-white font-semibold py-3 px-6 rounded-full transition duration-200 ease-in-out"
              >
                Back
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default EditDetails
