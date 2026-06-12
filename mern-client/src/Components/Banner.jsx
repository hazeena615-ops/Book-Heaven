import React from 'react';

const Banner = () => {
  return (
    <div className="px-4 px-lg-5 bg-info d-flex align-items-center">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 py-5 w-100">
        {/* Left Side */}
        <div className="col-md-6">
          <h2 className="display-4 fw-bold text-black">
            Buy and Sell Your Books{' '}
            <span className="text-primary">for the Best Prices</span>
          </h2>
          <p className="w-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            perspiciatis repellat omnis, officia dolore deleniti excepturi
            sapiente error incidunt odit optio? Ipsum nulla deserunt quia enim.
            Corporis labore distinctio alias?
          </p>
          <div className="input-group">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="form-control"
            />
            <button className="btn btn-primary fw-medium text-white hover-bg-dark">
              Search
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-6 text-center">
          <h4>Right Side</h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
