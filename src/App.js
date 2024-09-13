import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Jobs from './components/Jobs';
import JobDetails from './components/JobDetails';
import Home from './components/Home'
import NotFound from './components/NotFound';
import Bookmark from './components/Bookmark'
// import Header from './components/Header';
// import Header from './components/Header'
class App extends Component {
  constructor(props) {
    super(props);
    // Fetch bookmarked jobs from localStorage or initialize as an empty array
    this.state = {
      // activeSection: 'jobs',
      // bookmarkedJobs: JSON.parse(localStorage.getItem('bookmarkedJobs')) || [],
    };
  }

  // Save bookmarks to localStorage when they change
  // componentDidUpdate(_, prevState) {
  //   if (prevState.bookmarkedJobs !== this.state.bookmarkedJobs) {
  //     localStorage.setItem('bookmarkedJobs', JSON.stringify(this.state.bookmarkedJobs));
  //   }
  // }

  // Add or remove job from bookmarks
  // toggleBookmark = (job) => {
  //   const { bookmarkedJobs } = this.state;
  //   const isBookmarked = bookmarkedJobs.some((bookmarkedJob) => bookmarkedJob.id === job.id);
    
  //   if (isBookmarked) {
  //     // Remove job from bookmarks if already bookmarked
  //     const updatedBookmarks = bookmarkedJobs.filter((bookmarkedJob) => bookmarkedJob.id !== job.id);
  //     this.setState({ bookmarkedJobs: updatedBookmarks });
  //   } else {
  //     // Add job to bookmarks if not already bookmarked
  //     this.setState((prevState) => ({
  //       bookmarkedJobs: [...prevState.bookmarkedJobs, job],
  //     }));
  //   }
  // };

  // setActiveSection = (section) => {
  //   this.setState({ activeSection: section });
  // };

  render() {
    // const { activeSection, bookmarkedJobs } = this.state;
    
    return (
      <BrowserRouter>
      
      {/* <div>
        

        {activeSection === 'jobs' ? (
          <Jobs bookmarkedJobs={bookmarkedJobs} toggleBookmark={this.toggleBookmark} />
        ) : (
          <Bookmark bookmarkedJobs={bookmarkedJobs} toggleBookmark={this.toggleBookmark} />
        )}

        
         <div className="bottom-nav">
           <button onClick={() => this.setActiveSection('jobs')}>Jobs</button>
           <button onClick={() => this.setActiveSection('bookmarks')}>Bookmarks</button>
         </div>
       </div> */}
      
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/bookmark" element={<Bookmark/>} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </BrowserRouter>

      
    
     ); 
  
  }
}

export default App;

// import React, { Component } from 'react';
// import Jobs from './components/Jobs';
// import Bookmark from './components/Bookmark';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeSection: 'jobs',
//       bookmarkedJobs: JSON.parse(localStorage.getItem('bookmarkedJobs')) || [],
//     };
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.bookmarkedJobs !== this.state.bookmarkedJobs) {
//       localStorage.setItem('bookmarkedJobs', JSON.stringify(this.state.bookmarkedJobs));
//     }
//   }

//   setActiveSection = (section) => {
//     this.setState({ activeSection: section });
//   };

//   setBookmarkedJobs = (job) => {
//     this.setState((prevState) => ({
//       bookmarkedJobs: [...prevState.bookmarkedJobs, job],
//     }));
//   };

//   render() {
//     const { activeSection, bookmarkedJobs } = this.state;
//     return (
//       <div>
//         {activeSection === 'jobs' ? (
//           <Jobs bookmarkedJobs={bookmarkedJobs} setBookmarkedJobs={this.setBookmarkedJobs} />
//         ) : (
//           <Bookmark bookmarkedJobs={bookmarkedJobs} />
//         )}

//         {/* Bottom Navigation */}
//         <div className="bottom-nav">
//           <button onClick={() => this.setActiveSection('jobs')}>Jobs</button>
//           <button onClick={() => this.setActiveSection('bookmarks')}>Bookmarks</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
