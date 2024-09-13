// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'; // To access params in class component

// class JobDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       job: null,
//       loading: true,
//     };
//   }

//   componentDidMount() {
//     const { id } = this.props.match.params; // Get job ID from route parameters
//     this.fetchJobDetail(id);
//   }

//   fetchJobDetail(id) {
//     fetch(`https://testapi.getlokalapp.com/common/jobs/${id}`)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ job: data, loading: false });
//       })
//       .catch(error => {
//         console.error('Error fetching job detail:', error);
//         this.setState({ loading: false });
//       });
//   }

//   render() {
//     const { job, loading } = this.state;

//     if (loading) return <div>Loading...</div>;
//     if (!job) return <div>Job not found</div>;

//     return (
//       <div>
//         <h2>{job.title}</h2>
//         <p>{job.description}</p>
//         <p><strong>Requirements:</strong></p>
//         <ul>
//           {job.requirements.map((req, index) => (
//             <li key={index}>{req}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default withRouter(JobDetails); // Wrapping with withRouter to get access to router props

// import {Component} from 'react'
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Header from '../Header'
// import './index.css'


// const apiStatusConstants = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }

// class JobDetails extends Component {
//   state = {
//     jobData: {},
//     // skillData: [],
//     // companyData: [],
//     // similarJobsData: [],
//     apiStatus: apiStatusConstants.initial,
//   }

//   componentDidMount() {
//     this.getJobData()
//   }

//   getFormattedData = results => ({
//     title: results.title,
//       place: results.primary_details.Place,
//       salary: results.primary_details.Salary,
//       jobType: results.primary_details.Job_Type,
//       experience: results.primary_details.Experience,
//       qualification: results.primary_details.Qualification,
      
//   })

//   // getFormattedSkillData = eachSkill => ({
//   //   name: eachSkill.name,
//   //   imageUrl: eachSkill.image_url,
//   //   description: eachSkill.description,
//   //   imageUrl1: eachSkill.image_url,
//   // })

//   getJobData = async () => {
//     const {match} = this.props
//     const {params} = match
//     const {id} = params

//     this.setState({
//       apiStatus: apiStatusConstants.inProgress,
//     })
    
//     const apiUrl = `https://testapi.getlokalapp.com/common/jobs/${id}`
    
//     const response = await fetch(apiUrl)
//     if (response.ok) {
//       const fetchedData = await response.json()
//       console.log('Fetched Data:', fetchedData);
//       //   const updatedData = this.getFormattedData(fetchedData)
//       const updatedData = this.getFormattedData(fetchedData.results)
//       console.log(fetchedData);
//     //  const updatedSkillData = fetchedData.results.primary_details.map(eachSkill =>
//     //    this.getFormattedSkillData(eachSkill),
//     //   )
//       //   const updatedCompany = fetchedData.job_details.skills.map(
//       //       eachSkill => ({
//       //        description: eachSkill.description,
//       // imageUrl: eachSkill.image_url,
//       //       }),
//       //     )
//       // const updatedCompany = this.getFormattedSkillData(
//       //   fetchedData.job_details.life_at_company,
//       // )
//       // const updatedSimilarJobsData = fetchedData.similar_jobs.map(
//       //   eachSimilarJob => this.getFormattedData(eachSimilarJob),
//       // )
//       this.setState({
//         jobData: updatedData,
//         // skillData: updatedSkillData,
//         // companyData: updatedCompany,
//         // similarJobsData: updatedSimilarJobsData,
//         apiStatus: apiStatusConstants.success,
//       })
//     }
//     if (response.status === 404) {
//       this.setState({
//         apiStatus: apiStatusConstants.failure,
//       })
//     }
//   }

//   renderLoadingView = () => (
//     <div className="products-details-loader-container" data-testid="loader">
//       {/* <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" /> */} <p>loading...</p>
//     </div>
//   )

//   renderFailureView = () => (
//     <div className="product-details-failure-view-container">
//       <img
//         alt="failure view"
//         src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
//         className="failure-view-image"
//       />
//       <h1>Oops! Something Went Wrong</h1>
//       <p>We cannot seem to find the page you are looking for</p>
//       <button type="button" className="button" onClick={this.getJobData}>
//         Retry
//       </button>
//     </div>
//   )

//   renderJobDetailsView = () => {
//     const {jobData} = this.state
//     // similarJobsData, skillData, companyData
//     const {
//       title,
//       place,
//       salary,
//       jobType,
//       experience,
//       qualification,
      
//     } = jobData
//     // const {description, imageUrl} = companyData

//     if (!jobData || Object.keys(jobData).length === 0) {
//       return <p>No job details available</p>
//     }
//     return (
//       <div className="product-details-success-view">
//         <div className="product-item">
//           <div className="developer">
//             {/* <img
//               src={companyLogoUrl}
//               alt="job details company logo"
//               className="thumbnail"
//             /> */}
//             <h1 className="title">{title}</h1>
//             <div className="rating-container">
//               <p className="rating">{place}</p>
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/star-img.png"
//                 alt="star"
//                 className="star"
//               />
//             </div>
//           </div>
//           <div className="job-type">
//             <p className="brand"> {salary}</p>
//             <p className="price"> {jobType}</p>
//             <p className="package">{experience}</p>
//           </div>
//           <hr className="horizontal-line" />
//           <h1>Description</h1>
//           <h1>Description</h1>
//           <h1>Description</h1>
//           <h1>Description</h1>
//           {/* <a href={companyWebsiteUrl}>Visit</a> */}
//           <div className="product-details">
//             <p>{qualification}</p>
            
//           </div>
//           {/* <h1>Skills</h1>
//           {skillData.map(eachSkill => (
//             <SkillCard skillDetails={eachSkill} key={eachSkill.name} />
//           ))} */}
//         </div>
//         {/* <h1>Life at Company</h1>
//         <div className="company-at">
//           <p>{description}</p>
//           <img src={imageUrl} alt="life at company" />
//         </div> */}
//         {/* {companyData.map(eachSkill => (
//           <CompanyCard companyDetails={eachSkill} key={eachSkill.description} />
//         ))} */}
//         {/* <h1 className="similar-products-heading">Similar Jobs</h1>
//         <ul className="similar-products-list">
//           {similarJobsData.map(eachSimilarJob => (
//             <SimilarJobItems
//               jobDetails={eachSimilarJob}
//               key={eachSimilarJob.id}
//             />
//           ))}
//         </ul> */}
//       </div>
//     )
//   }

//   renderJobDetails = () => {
//     const {apiStatus} = this.state

//     switch (apiStatus) {
//       case apiStatusConstants.success:
//         return this.renderJobDetailsView()
//       case apiStatusConstants.failure:
//         return this.renderFailureView()
//       case apiStatusConstants.inProgress:
//         return this.renderLoadingView()
//       default:
//         return null
//     }
//   }

//   render() {
//     return (
//       <>
//         <Header />
//         <div className="product-item-details-container">
//           {this.renderJobDetails()}
//         </div>
//       </>
//     )
//   }
// }

// export default JobDetails
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
    // const getJobData = async () => {
    //   setApiStatus(apiStatusConstants.inProgress);

    //   const apiUrl = `https://testapi.getlokalapp.com/common/jobs/${id}`;
    //   const response = await fetch(apiUrl);

    //   if (response.ok) {
    //     const fetchedData = await response.json();
    //     console.log('Fetched Data:', fetchedData);

    //     const results = fetchedData.results || {};
    //     const primaryDetails = results.primary_details || {};

    //     // const updatedData = {
    //     //   title: fetchedData.results.title,
    //     //   place: fetchedData.results.primaryDetails.Place || 'N/A',
    //     //   salary: fetchedData.results.primary_details.Salary,
    //     //   jobType: fetchedData.results.primary_details.Job_Type,
    //     //   experience: fetchedData.results.primary_details.Experience,
    //     //   qualification: fetchedData.results.primary_details.Qualification,
    //     // };/
    //     const updatedData = {
    //       title: results.title || 'No Title Available',
    //       place: primaryDetails.Place || 'No Location Available',
    //       salary: primaryDetails.Salary || 'No Salary Information',
    //       jobType: primaryDetails.Job_Type || 'No Job Type Information',
    //       experience: primaryDetails.Experience || 'No Experience Information',
    //       qualification: primaryDetails.Qualification || 'No Qualification Information',
    //     };
    //     setJobData(updatedData);
    //     setApiStatus(apiStatusConstants.success);
    //   } else if (response.status === 404) {
    //     setApiStatus(apiStatusConstants.failure);
    //   }
    // };
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

