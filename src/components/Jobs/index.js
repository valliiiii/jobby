
import {Component} from 'react'
// import Loader from 'react-loader-spinner'
// import Cookies from 'js-cookie'

// import FilterGroups from '../FilterGroups'
import  Header from '../Header'
import JobCard from '../JobCard'
import Bookmark from '../Bookmark'

// import Profile from '../Profile'
import './index.css'

// const employmentTypesList = [
//   {
//     label: 'Full Time',
//     employmentTypeId: 'FULLTIME',
//   },
//   {
//     label: 'Part Time',
//     employmentTypeId: 'PARTTIME',
//   },
//   {
//     label: 'Freelance',
//     employmentTypeId: 'FREELANCE',
//   },
//   {
//     label: 'Internship',
//     employmentTypeId: 'INTERNSHIP',
//   },
// ]

// const salaryRangesList = [
//   {
//     salaryRangeId: '1000000',
//     label: '10 LPA and above',
//   },
//   {
//     salaryRangeId: '2000000',
//     label: '20 LPA and above',
//   },
//   {
//     salaryRangeId: '3000000',
//     label: '30 LPA and above',
//   },
//   {
//     salaryRangeId: '4000000',
//     label: '40 LPA and above',
//   },
// ]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Jobs extends Component {
  state = {
    jobsList: [],
    page: 1,
    totalPages: 3,
    isLoadingMore: false,
    activeSection: 'jobs',
    bookmarkedJobs: JSON.parse(localStorage.getItem('bookmarkedJobs')) || [],
    apiStatus: apiStatusConstants.initial,
   
  }

  componentDidMount() {
    this.getProducts()
    window.addEventListener('scroll', this.handleScroll);
  }
  componentDidUpdate(_, prevState) {
    if (prevState.bookmarkedJobs !== this.state.bookmarkedJobs) {
      localStorage.setItem('bookmarkedJobs', JSON.stringify(this.state.bookmarkedJobs));
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  getProducts = async (pageNumber = this.state.page) => {
    // const {page} = this.state
    
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
      isLoadingMore: true,
      
    })
    // const jwtToken = Cookies.get('jwt_token')
    // const {searchInput, employmentTypesId, salaryRangesId} = this.state
    const apiUrl = `https://testapi.getlokalapp.com/common/jobs?page=${pageNumber}`
    
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
     
      const updatedData = fetchedData.results.map(job => {
        const primaryDetails = job.primary_details || {};
        // const jobRole = job.job_role || {};
        return {
          id: job.id,
          title: job.title,
          companyName: job.company_name || "N/A",
          location: primaryDetails.Place || 'N/A',
          salary: primaryDetails.Salary || 'N/A',
          jobType: primaryDetails.Job_Type || 'N/A',
          phoneNumber: job.custom_link,
          whatsappNo: job.whatsapp_no,
          // role: jobRole || 'no',
        };
      })
      this.setState({
        jobsList: updatedData,
        apiStatus: apiStatusConstants.success,
        totalPages: fetchedData.total_pages,
        page: pageNumber,
        isLoadingMore: false,
        
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
        isLoadingMore: false,
      })
    }
  }

  // changeRange = salaryRangesId => {
  //   this.setState({salaryRangesId}, this.getProducts)
  // }

  // changeEmployment = employmentTypesId => {
  //   this.setState({employmentTypesId}, this.getProducts)
  // }

  // enterSearchInput = () => {
  //   this.getProducts()
  // }

  // changeSearchInput = searchInput => {
  //   this.setState({searchInput})
  // }

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="jobs failure"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We cannot seem to find the page you are looking for.
      </p>
    </div>
  )

  // renderProductsListView = () => {
  //   const {jobsList} = this.state
  //   const shouldShowProductsList = jobsList.length > 0

  //   return shouldShowProductsList ? (
  //     <div className="all-products-container">
  //       <ul className="products-list">
  //         {jobsList.map(job => (
  //           <JobCard jobData={job} key={job.id} />
  //         ))}
  //       </ul>
  //     </div>
  //   ) : (
  //     <div className="no-products-view">
  //       <img
  //         src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
  //         className="no-products-img"
  //         alt="no jobs"
  //       />
  //       <h1 className="no-products-heading">No Jobs Found</h1>
  //       <p className="no-products-description">
  //         We could not find any jobs. Try other filters.
  //       </p>
  //     </div>
  //   )
  // }
  renderProductsListView = () => {
    const {jobsList, bookmarkedJobs} = this.state
    const shouldShowProductsList = jobsList.length > 0
  
    return shouldShowProductsList ? (
      <div className="all-products-container">
        <ul className="products-list">
          {jobsList.map(job => (
            <JobCard 
              jobData={job} 
              key={job.id} 
              toggleBookmark={this.toggleBookmark}
              isBookmarked={bookmarkedJobs.some(bookmarkedJob => bookmarkedJob.id === job.id)} 
            />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          className="no-products-img"
          alt="no jobs"
        />
        <h1 className="no-products-heading">No Jobs Found</h1>
        <p className="no-products-description">
          We could not find any jobs. Try other filters.
        </p>
      </div>
    )
  }
  

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      {/* <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" /> */}<p>loading....</p>
    </div>
  )

  renderAllProducts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
  toggleBookmark = (job) => {
    const { bookmarkedJobs } = this.state;
    const isBookmarked = bookmarkedJobs.some((bookmarkedJob) => bookmarkedJob.id === job.id);
    
    if (isBookmarked) {
      // Remove job from bookmarks if already bookmarked
      const updatedBookmarks = bookmarkedJobs.filter((bookmarkedJob) => bookmarkedJob.id !== job.id);
      this.setState({ bookmarkedJobs: updatedBookmarks });
    } else {
      // Add job to bookmarks if not already bookmarked
      this.setState((prevState) => ({
        bookmarkedJobs: [...prevState.bookmarkedJobs, job],
      }));
    }
  };
  setActiveSection = (section) => {
      this.setState({ activeSection: section });
    };
    handlePageChange = (newPage) => {
      this.setState({ page: newPage }, () => {
        this.getProducts(newPage);
      });
    }
    // renderPagination = () => {
    //   const { page, totalPages } = this.state;
    //   const pages = [];
  
    //   // Dynamically generate pagination buttons based on totalPages
    //   for (let i = 1; i <= totalPages; i++) {
    //     pages.push(
    //       <button
    //         key={i}
    //         className={`pagination-button ${page === i ? 'active' : ''}`}
    //         onClick={() => this.handlePageChange(i)}
    //       >
    //         {i}
    //       </button>
    //     );
    //   }
  
    //   return <div className="pagination-container">{pages}</div>;
    // };
    
    handleScroll = () => {
      const { isLoadingMore, page, totalPages } = this.state;
      
      // Check if we have scrolled to the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !isLoadingMore) {
        if (page < totalPages) {
          this.getProducts(page + 1); // Fetch next page
        }
      }
    };

  render() {
    // const {searchInput, employmentTypesId, salaryRangesId} = this.state
    const { activeSection, bookmarkedJobs } = this.state;

    return (
      <>
      <Header />
      <div className="all-products-section">
        {/* <Profile /> */}
        {/* <FilterGroups
          searchInput={searchInput}
          employmentTypesList={employmentTypesList}
          salaryRangesList={salaryRangesList}
          changeSearchInput={this.changeSearchInput}
          enterSearchInput={this.enterSearchInput}
          employmentTypesId={employmentTypesId}
          salaryRangesId={salaryRangesId}
          changeEmployment={this.changeEmployment}
          changeRange={this.changeRange}
        /> */}
        <div className="all-products-section">
        <div>
          {activeSection === 'jobs' ? (
            <>
            {this.renderAllProducts()}
            
          </>
             // Rendering the jobs
          ) : (
            <Bookmark bookmarkedJobs={bookmarkedJobs} toggleBookmark={this.toggleBookmark} />
          )}
          
          <div className="bottom-nav">
          <button 
              className={activeSection === 'jobs' ? 'active-nav-button' : 'nav-button'} 
              onClick={() => this.setActiveSection('jobs')}
            >
              Jobs
            </button>
            <button 
              className={activeSection === 'bookmarks' ? 'active-nav-button' : 'nav-button'} 
              onClick={() => this.setActiveSection('bookmarks')}
            >
              Bookmarks
            </button>
            {/* <button onClick={() => this.setActiveSection('jobs')}>Jobs</button>
            <button onClick={() => this.setActiveSection('bookmarks')}>Bookmarks</button> */}
          </div>
        </div>
      </div>
        {this.renderAllProducts()}
      </div>
      </>
    )
  }
}

export default Jobs
