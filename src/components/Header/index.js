import {Link} from 'react-router-dom'

// import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
//   const onClickLogout = () => {
//     const {history} = props
//     Cookies.remove('jwt_token')
//     history.replace('/login')
//   }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          
          
        </div>

        <div className="nav-bar-large-container">
          {/* <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />

          </Link> */}
          <h2 className="jobs1">JOB PORTAL</h2>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>

            {/* <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li> */}
          </ul>
          {/* <button
            type="button"
            className="logout-desktop-btn"
            // onClick={onClickLogout}
          >
            Logout
          </button> */}
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/jobs" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </Link>
          </li>
          {/* <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Header
