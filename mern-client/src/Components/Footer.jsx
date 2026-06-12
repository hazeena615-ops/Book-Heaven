import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-white py-4"style={{ backgroundColor: 'rgb(165, 42, 42)' }}>
      <div className="container">
        <div className="row">
          {/* Follow Us Section */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-youtube fs-4"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-white text-decoration-none">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
              <i className="bi bi-geo-alt"></i> 123 Book Lane, Literature City, 56789
            </p>
            <p>
              <i className="bi bi-envelope"></i> support@bookstore.com
            </p>
            <p>
              <i className="bi bi-telephone"></i> +1 (555) 123-4567
            </p>
          </div>
        </div>
        <hr className="bg-secondary" />
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Online Book Store. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
