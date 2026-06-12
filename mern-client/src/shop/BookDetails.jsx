// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';

// const BookDetails = () => {
//   const { id } = useParams(); // Get the book ID from the URL
//   const [book, setBook] = useState(null);

//   useEffect(() => {
//     // Fetch the book details by ID
//     fetch(`http://localhost:5000/book/${id}`)
//       .then(res => res.json())
//       .then(data => setBook(data.book));
//   }, [id]);

//   if (!book) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: '2rem', textAlign: 'center' }}>
//       <div style={{ marginBottom: '2rem' }}>
//         <img
//           src={book.imageURL}
//           alt={book.title}
//           style={{ width: '300px', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
//         />
//       </div>
//       <h2>{book.bookTitle}</h2>
//       {/* <p>{book.description}</p> */}
//       <p><strong>Category:</strong> {book.category}</p>
//       <p><strong>Price:</strong> $10</p>
//       <p><strong>Rating:</strong> 4-5/5</p>
//       <Link to="/payment">
//         <button className="btn btn-primary">Place Order</button>
//       </Link>
//     </div>
//   );
// };

// export default BookDetails;

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BookDetails.css'; // Import the CSS file

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch the book details by ID
    fetch(`http://localhost:5000/book/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data.book));
  }, [id]);

  if (!book) return <p>Loading...</p>;
 

  return (
    <div className="book-details-container">
      <div className="book-details-card">
        <img
          src={book.imageURL}
          alt={book.bookTitle}
          className="book-details-image"
        />
        <h2 className="book-details-title">{book.bookTitle}</h2>
        <p className="book-details-text">
          <strong>Category:</strong> {book.category}
        </p>
        <p className="book-details-text">
          <strong>Price:</strong> $10
        </p>
        <p className="book-details-text">
          <strong>Rating:</strong> {' '}
          <span className="gold-stars">★★★★★</span> (4.5/5)
        
        </p>
        <Link to="/payment">
          <button className="book-details-button">Place Order</button>
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;


