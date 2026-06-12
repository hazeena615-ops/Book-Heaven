import React from 'react';
import { Link } from 'react-router-dom';


const PromoBanner = () => {
  return (
    <div className="mt-4 py-5  px-4" style={{ background: "linear-gradient(to right, #f3e5ab, #e6d4a7)" }}>
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="display-5 fw-bold mb-2">
            2024 National Book Awards for Fiction Shortlist
          </h2>
          <Link to="/shop" className="d-block">
            <button className="btn  fw-semibold px-4 py-2"style={{ backgroundColor: 'rgb(165, 42, 42)', color: 'white' }}>
              Get Promo Code
            </button>
          </Link>
        </div>
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img src="/Promobook.png" alt="Book Awards" className="img-fluid" style={{ maxWidth: '300px' }} />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
