// import React from 'react';

// const Bookmark = ({ bookmarkedJobs, toggleBookmark }) => {
//   if (bookmarkedJobs.length === 0) {
//     return <p>No jobs bookmarked yet.</p>;
//   }

//   return (
//     <div>
//       <h2>Bookmarked Jobs</h2>
//       {bookmarkedJobs.map((job) => (
//         <div key={job.id} className="job-card">
//           <h3>{job.title || 'No Title'}</h3>
//           <p>Location: {job.primary_details?.Place || 'Unknown Location'}</p>
//              <p>Salary: {job.primary_details?.Salary || 'Unknown Location'}</p>
//              <p>Phone: {job.custom_link ? job.custom_link.replace('tel:', '') : job.whatsapp_no || 'Not Available'}</p>

//           <button onClick={() => toggleBookmark(job)}>Remove Bookmark</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Bookmark;

//Bookmarks.jsx
// import React, { useState, useEffect } from 'react';
// import JobCard from '../JobCard';

// const Bookmarks = () => {
  
//   const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

//   useEffect(() => {
//     // Load bookmarked jobs from localStorage
//     const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
//     setBookmarkedJobs(savedBookmarks);
//   }, []);

//   return (
//     <div>
//       {bookmarkedJobs.length > 0 ? (
//         bookmarkedJobs.map((job) => (
//           <JobCard key={job.id} job={job} onBookmark={() => {}} /> // Bookmark action is not needed here
//         ))
//       ) : (
//         <p>No jobs bookmarked yet.</p>
//       )}
//     </div>
//   );
// };

// export default Bookmarks;
// import React, { Component } from 'react';
// import Jobs from './Jobs'; // Assuming you have a Jobs component for job listings
// import BookmarksList from './BookmarksList'; // Component to display the bookmarked jobs

// class Bookmark extends Component {
//   constructor(props) {
//     super(props);
//     // Fetch bookmarked jobs from localStorage or initialize as an empty array
//     this.state = {
//       activeSection: 'jobs', // Default section
//       bookmarkedJobs: JSON.parse(localStorage.getItem('bookmarkedJobs')) || [], // Load bookmarks
//     };
//   }

//   // Save bookmarks to localStorage when they change
//   componentDidUpdate(_, prevState) {
//     if (prevState.bookmarkedJobs !== this.state.bookmarkedJobs) {
//       localStorage.setItem('bookmarkedJobs', JSON.stringify(this.state.bookmarkedJobs));
//     }
//   }

//   // Add or remove job from bookmarks
//   toggleBookmark = (job) => {
//     const { bookmarkedJobs } = this.state;
//     const isBookmarked = bookmarkedJobs.some((bookmarkedJob) => bookmarkedJob.id === job.id);
    
//     if (isBookmarked) {
//       // Remove job from bookmarks if already bookmarked
//       const updatedBookmarks = bookmarkedJobs.filter((bookmarkedJob) => bookmarkedJob.id !== job.id);
//       this.setState({ bookmarkedJobs: updatedBookmarks });
//     } else {
//       // Add job to bookmarks if not already bookmarked
//       this.setState((prevState) => ({
//         bookmarkedJobs: [...prevState.bookmarkedJobs, job],
//       }));
//     }
//   };

//   // Set the active section (Jobs or Bookmarks)
//   setActiveSection = (section) => {
//     this.setState({ activeSection: section });
//   };

//   render() {
//     const { activeSection, bookmarkedJobs } = this.state;

//     return (
//       <div>
//         {/* Conditionally render Jobs or Bookmarks section */}
//         {activeSection === 'jobs' ? (
//           <Jobs bookmarkedJobs={bookmarkedJobs} toggleBookmark={this.toggleBookmark} />
//         ) : (
//           <BookmarksList bookmarkedJobs={bookmarkedJobs} toggleBookmark={this.toggleBookmark} />
//         )}

//         {/* Bottom navigation to switch between Jobs and Bookmarks */}
//         <div className="bottom-nav">
//           <button onClick={() => this.setActiveSection('jobs')}>Jobs</button>
//           <button onClick={() => this.setActiveSection('bookmarks')}>Bookmarks</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Bookmark;
import React from 'react';
import JobCard from '../JobCard'; // Import the JobCard component

const Bookmark = ({ bookmarkedJobs, toggleBookmark }) => {
  return (
    <div>
      {bookmarkedJobs.length > 0 ? (
        <ul className="products-list">
          {bookmarkedJobs.map(job => (
            <JobCard
              key={job.id}
              jobData={job}
              toggleBookmark={toggleBookmark}
              isBookmarked={true} // All jobs here are already bookmarked
            />
          ))}
        </ul>
      ) : (
        <div className="no-products-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
            className="no-products-img"
            alt="no jobs"
          />
          <h1 className="no-products-heading">No Bookmarked Jobs</h1>
        </div>
      )}
    </div>
  );
};

export default Bookmark;
