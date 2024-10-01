
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header';
import './index.css';

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
};

function JobDetails() {
  const [jobData, setJobData] = useState({});
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const { id } = useParams(); // Get the route parameter

  useEffect(() => {
  
    const getJobData = async () => {
      setApiStatus(apiStatusConstants.inProgress);
    
      const apiUrl = `https://testapi.getlokalapp.com/common/jobs/${id}`;
      const response = await fetch(apiUrl);
    
      if (response.ok) {
        const fetchedData = await response.json();
        console.log('Fetched Data:', fetchedData);
    
        // Extract the first item from results array
        const jobItem = fetchedData.results[0] || {};
        const primaryDetails = jobItem.primary_details || {};
        const otherDetails = jobItem.other_details || {}; 
        const jobRole = jobItem.job_role || {};
        const contactPreference = jobItem.contact_preference || {};
        const jobCategory = jobItem.job_category || {};
        const jobHours = jobItem.job_hours || {}; 
        const phoneNumber = jobItem.custom_link || {};
        const whatsappNo = jobItem.whatsappLink || {};
        const companyName= jobItem.company_name  || {};
        
    
        const updatedData = {
          title: jobItem.title || 'No Title Available',
          place: primaryDetails.Place || 'No Location Available',
          salary: primaryDetails.Salary || 'No Salary Information',
          jobType: primaryDetails.Job_Type || 'No Job Type Information',
          experience: primaryDetails.Experience || 'No Experience Information',
          qualification: primaryDetails.Qualification || 'No Qualification Information',
          content: otherDetails || 'No Content Information',
          role: jobRole || 'no',
          preference : contactPreference.preference || "no",
          whatsappLink: contactPreference.whatsapp_link || "no", 
          preferredCallStartTime: contactPreference.preferred_call_start_time || "no", 
          preferredCallEndTime: contactPreference.preferred_call_start_time || "no", 
          jobCategory: jobCategory.job_category || "no",
          jobHours: jobHours.job_hours || "no",
          phoneNumber: jobItem.custom_link,
          whatsappNo: jobItem.whatsapp_no,
          companyName: jobItem.company_name ,
        };
        setJobData(updatedData);
        setApiStatus(apiStatusConstants.success);
      } else if (response.status === 404) {
        setApiStatus(apiStatusConstants.failure);
      }
    };
    
    getJobData();
  }, [id]); // Dependency array includes `id`

  const renderLoadingView = () => (
    <div className="products-details-loader-container" data-testid="loader">
      <p>loading...</p>
    </div>
  );

  const renderFailureView = () => (
    <div className="product-details-failure-view-container">
      <img
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        className="failure-view-image"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button" className="button" onClick={() => this.getJobData()}>
        Retry
      </button>
    </div>
  );

  const renderJobDetailsView = () => {
    const {
      title,
      place,
      salary,
      jobType,
      experience,
      qualification,
      content,
      role,
      contact,
      preference ,
          whatsappLink, 
          preferredCallStartTime, 
          preferredCallEndTime,
          jobHours,
          jobCategory,
          phoneNumber,
          whatsappNo,
          companyName,
    } = jobData;

    return (
      <div className="product-details-success-view">
        <div className="product-item">
          <div >
            <h1 className="title">Title:{title}</h1>
            <div>
            <p>Copany Nome: {companyName} </p>
            <p >Role:{role}</p>
              <p >Type:{jobType}</p>
              <p >Loacation:{place}</p>
            <p >Salary:{salary}</p>
            <p >Qalification:{qualification}</p>
            <p >Experience:{experience}</p>
            
            {/* <p >Job Time:{jobHours}</p>
            <p >Category:{jobCategory}</p> */}
            <h1 className="title">cantact Information</h1>
            <p>Phone Number: <a href={`https://wa.me/${whatsappNo}`}>{whatsappNo || 'WhatsApp number not available'}</a></p>
            <p className="price">start time:{preferredCallStartTime}AM</p>
            <p className="price">end time:{preferredCallEndTime}PM</p>
            </div>
          </div>
          <hr className="horizontal-line" />
          <h1 className="title">Job Description</h1>
          <div className="product-details">
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderJobDetails = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderJobDetailsView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="product-item-details-container">
        {renderJobDetails()}
      </div>
    </>
  );
}

export default JobDetails;

