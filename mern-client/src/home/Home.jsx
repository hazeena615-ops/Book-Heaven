import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import FavouriteBooks from './FavouriteBooks';
import FavBook from './FavBook';
import PromoBanner from './PromoBanner';
import Otherbooks from './Otherbooks';
import Review from './Review';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
      <>
        <div className="px-4 px-lg-5 d-flex align-items-center" style={{ background: "linear-gradient(to right, #f3e5ab, #e6d4a7)" }}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 py-5 w-100">
          {/* Left Side */}
          <div className="col-md-6">
            <h2 className="display-4 fw-bold text-black">
              Buy and Sell Your Books{' '}
              <span style={{ color: 'rgb(165, 42, 42)' }}>for the Best Prices</span>
            </h2>
            <p className="w-75">
            Welcome to our online bookstore, where a world of stories, knowledge, 
            and adventure awaits you. Whether you're looking for the latest bestsellers, 
            Explore our collection today and discover your next great read—delivered straight to your door!
            </p>
            <div className="input-group">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search a book"
                className="form-control"
              />
              <Link to="/shop">
              <button 
            className="btn fw-medium text-white hover-bg-dark" style={{ backgroundColor: 'rgb(165, 42, 42)', color: 'white' }}>
               Search
              </button>
              </Link>
            </div>
          </div>
  
          {/* Right Side */}
          <div className="col-md-6 text-center">
           <Card/>
    
          </div>
        </div>
      </div>
      <div>
      <FavouriteBooks/>
      </div>
      <div>
        <FavBook/>
      </div>
      <div>
        <PromoBanner/>
      </div>
      <div>
        <Otherbooks/>
      </div>
      <div>
        <Review/>
      </div>
      </>
    );
  };

export default Home
