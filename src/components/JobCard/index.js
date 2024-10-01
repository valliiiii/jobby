

import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"

const JobCard = ({ jobData, toggleBookmark, isBookmarked}) => {
  const {id, title, location,companyName, salary, jobType ,whatsappNo} = jobData
  

  return (
    <li className="product-item">
      <div className='job-card'>
      <Link to={`/jobs/${id}`} className="link-item">
      <h2>Title: {title}</h2>
      {/* <p>Job Role: {jobRole}</p> */}
      <p>Location: {location}</p>
      <p>Salary: {salary}</p>
      <p>Type: {jobType}</p>
       {/* Call HR Button */}
       {/* <p>Phone: {phoneNumber ? phoneNumber.replace('tel:', '') : whatsappNo || 'Not Available'}</p> */}
       <p>Phone Number: <a href={`https://wa.me/${whatsappNo}`}>{whatsappNo || 'WhatsApp number not available'}</a></p>
      </Link>
      <button className='button1' onClick={() => toggleBookmark(jobData)}>
        {isBookmarked ? 'Unbookmark' : 'Bookmark'}
      </button>
      </div>
    </li>
  )
}

export default JobCard
