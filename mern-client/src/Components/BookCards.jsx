// import React, { useEffect, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

//  import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';
// import {Link} from 'react-router-dom';



// const BookCards = ({ headline, books }) => {
//   const [swiperInitialized, setSwiperInitialized] = useState(false);

//   useEffect(() => {
//     setSwiperInitialized(true); // Set swiperInitialized to true after books are loaded
//   }, [books]);

//   return (
//     <div className="my-4 px-4 px-lg-5">
//       <h1 className="text-center font-weight-bold text-dark my-2">{headline}</h1>

//       {/* Cards */}
//       <div>
//         {/* Only render Swiper when swiperInitialized is true */}
//         {swiperInitialized && (
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={10}
//             pagination={{
//               clickable: true,
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 4,
//                 spaceBetween: 40,
//               },
//               1024: {
//                 slidesPerView: 5,
//                 spaceBetween: 50,
//               },
//             }}
//             modules={[Pagination]}
//             className="mySwiper"
//           >
//             {books.map(({ _id, book }) => (
//               <SwiperSlide key={_id}>
//                 <Link to="/">
//                   <div>
//                     <img
//                       src={book.imageURL}
//                       alt={book.bookTitle}
//                       onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
//                     />
//                   </div>
//                   <div>
//                     <h3>{book.bookTitle}</h3>
//                     <p>{book.authorName}</p>
//                   </div>
//                 </Link>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookCards;


// import React, { useState } from 'react';
// import './styles.css';
// import { Link } from 'react-router-dom';

// const BookCards = ({ headline, books }) => {
//   const [activeSlide, setActiveSlide] = useState(0); // Track the active slide

//   const handleDotClick = (index) => {
//     setActiveSlide(index);
//   };

//   const handleNext = () => {
//     setActiveSlide((prev) => (prev + 1) % books.length); // Loop back to the first slide
//   };

//   const handlePrev = () => {
//     setActiveSlide((prev) => (prev - 1 + books.length) % books.length); // Loop back to the last slide
//   };

//   return (
//     <div className="my-4 px-4 px-lg-5">
//       <h1 className="text-center font-weight-bold text-dark my-2">{headline}</h1>

//       {/* Slider */}
//       <div className="slider-container">
//         <div
//           className="slider"
//           style={{ transform: `translateX(-${activeSlide * 100}%)` }}
//         >
//           {books.map(({ _id, book }) => (
//             <div key={_id} className="slide">
//               <Link to="/">
//                 <div>
//                   <img
//                     src={book.imageURL}
//                     alt={book.bookTitle}
//                     onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
//                   />
//                 </div>
//                 <div>
//                   <h3>{book.bookTitle}</h3>
//                   <p>{book.authorName}</p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Dots */}
//         <div className="dots-container">
//           {books.map((_, index) => (
//             <span
//               key={index}
//               className={`dot ${index === activeSlide ? 'active' : ''}`}
//               onClick={() => handleDotClick(index)}
//             ></span>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <button className="prev" onClick={handlePrev}>
//           Prev
//         </button>
//         <button className="next" onClick={handleNext}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookCards;

import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaCartShopping } from  'react-icons/fa6'

const BookCards = ({ headline, books }) => {
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % books.length); // Loop back to the first slide
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + books.length) % books.length); // Loop back to the last slide
  };

  return (
    <div className="my-4 px-4 px-lg-5">
      <h1 className="text-center font-weight-bold text-dark my-2">{headline}</h1>

      {/* Slider */}
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {books.map(({ _id, book }) => (
            <div key={_id} className="slide">
              {/* <Link to={`/book/${_id}`}> */}
              <Link to={`/book/view/${_id}`}>
                <div>
                  <img
                    src={book.imageURL}
                    alt={book.bookTitle}
                    onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}/>
                   
                </div>
                <div className='name'>
                  <h3 className='title'>{book.bookTitle}</h3>
                  <p className='author'>{book.authorName}</p>
                </div>
                <div>
                  <div className='rupees'>
                  <p>$10.00</p>
                  </div>
                  
                  <div className='shop'>
                    <FaCartShopping/>
                    </div> 
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="dots-container">
          {books.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button className="prev" onClick={handlePrev}>
          &#10094; {/* Left Arrow */}
        </button>
        <button className="next" onClick={handleNext}>
          &#10095; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default BookCards;
