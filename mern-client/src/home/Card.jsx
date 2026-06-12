import React from 'react';
import './Card.css'; // Create a custom CSS file for flip effect

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
        <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1709902335i/203578918.jpg"
            alt="Book Front"
            className="card-image"
          />
        </div>
        <div className="card-back">
        <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1712408400i/210134467.jpg"
            alt="Book Back"
            className="card-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

