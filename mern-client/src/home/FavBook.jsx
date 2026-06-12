import React from 'react';
import { Link } from 'react-router-dom';


const FavBook = () => {
  return (
    <div className="container my-5 column-gap-3">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6">
          <img 
            src="/favbook.jpg"
            alt="Favorite Book" 
            className="img-fluid rounded" 
          />
        </div>
        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="display-4 fw-bold my-4">
            Find Your Favorite <span style={{ color: 'rgb(165, 42, 42)' }}>Book Here!</span>
          </h2>
          <p className="mb-4 text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et nam necessitatibus 
            blanditiis cumque nesciunt facere accusamus? Pariatur, a neque. Exercitationem, tempora 
            sunt? Deserunt consectetur explicabo architecto, inventore sequi harum!
          </p>
        <div className="d-flex column-gap-4 ">
          <div className="d-flex flex-column">
            <h3 className="display-5 fw-bold">800+</h3>
            <p className="text-secondary">Book Listing</p>
          </div>
          <div className="d-flex flex-column">
            <h3 className="display-5 fw-bold">550+</h3>
            <p className="text-secondary">Register Users</p>
          </div>
          <div className="d-flex flex-column">
            <h3 className="display-5 fw-bold">200+</h3>
            <p className="text-secondary">PDF Downloaded</p>
          </div>
        </div>
        <Link to="/shop"><button className="btn "style={{ backgroundColor: 'rgb(165, 42, 42)', color: 'white' }}>Explor More</button></Link>
        </div>
        
      </div>
      
    </div>
  );
};

export default FavBook;
