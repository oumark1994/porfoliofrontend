import { Link } from "react-router-dom"
import Header from "./Header"

const Sidebar = () => {
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    window.location.reload()
  }

  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <aside className="left-sidebar">
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link to="/" className="text-nowrap logo-img">
            {/* <img src="./public/assets/images/logos/dark-logo.svg" width="180" alt="" /> */}
            My Porfolio
          </Link>
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>
        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/dashboard" aria-expanded="false">
                <span>
                  <i className="ti ti-layout-dashboard"></i>
                </span>
                <span className="hide-menu">Dashboard</span>
              </Link>
            </li>
          
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/hero" aria-expanded="false">
                <span>
                  <i className="ti ti-article"></i>
                </span>
                <span className="hide-menu">Hero</span>
              </Link>
            </li>
            <li className="sidebar-item">
            <Link className="sidebar-link" to="/skills" aria-expanded="false">
                <span>
                  <i className="ti ti-alert-circle"></i>
                </span>
                <span className="hide-menu">Skills</span>
              </Link>
            </li>
            <li className="sidebar-item">
            <Link className="sidebar-link" to="/projects" aria-expanded="false">
                <span>
                  <i className="ti ti-cards"></i>
                </span>
                <span className="hide-menu">Projects</span>
              </Link>
            </li>
            <li className="sidebar-item">
            <Link className="sidebar-link" to="/services" aria-expanded="false">
                <span>
                  <i className="ti ti-file-description"></i>
                </span>
                <span className="hide-menu">Services</span>
              </Link>
            </li>
            <li className="sidebar-item">
            <Link className="sidebar-link" to="/testimonials" aria-expanded="false">
                <span>
                  <i className="ti ti-typography"></i>
                </span>
                <span className="hide-menu">Testimonials</span>
              </Link>
            </li>
            
            <li className="sidebar-item">
              <button className="sidebar-link"  onClick={handleLogout} aria-expanded="false">
                <span>
                  <i className="ti ti-login"></i>
                </span>
                <span className="hide-menu">Logout</span>
              </button>
            </li>
            
          
          
           
          </ul>
      
      
      
        </nav>
      
      </div>
    </aside>
    <div className="body-wrapper">
      <Header/>
    </div>
    </div>
  
  )
}

export default Sidebar