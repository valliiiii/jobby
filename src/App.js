import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Jobs from './components/Jobs';
import JobDetails from './components/JobDetails';
import Home from './components/Home'
import NotFound from './components/NotFound';
import Bookmark from './components/Bookmark'


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

