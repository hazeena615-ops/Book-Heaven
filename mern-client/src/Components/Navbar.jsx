import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "linear-gradient(to right, #f3e5ab, #e6d4a7)" }}>
        <div className="container-fluid">
        <Link
  className="navbar-brand ms-5 d-flex align-items-center"
  to="/"
  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.5rem", fontWeight: "bold", color: "rgb(165, 42, 42)", textDecoration: "none" }}
  onMouseEnter={(e) => (e.target.style.color = "#000")}
  onMouseLeave={(e) => (e.target.style.color = "rgb(165, 42, 42)")}
>
  <i className="fas fa-book-open me-2" style={{ color: "rgb(165, 42, 42)", fontSize: "1.8rem" }}></i>
  Heaven
</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
    
          {
            user? user.email:""
          }

          

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={{ color: 'rgb(165, 42, 42)' }}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: 'rgb(165, 42, 42)' }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/shop"
                  style={{ color: 'rgb(165, 42, 42)' }}
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/admin/dashboard"
                  style={{ color: 'rgb(165, 42, 42)' }}
                >
                  Sell your Book
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/blog"
                  style={{ color: 'rgb(165, 42, 42)' }}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
