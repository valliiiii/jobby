
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
