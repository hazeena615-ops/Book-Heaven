// import React from 'react'
// import {useEffect,useState} from 'react'

// const Shop = () => {
//   const [books,setBooks]=useState([]);

//   useEffect(()=>{
//     fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
//   }, [])
//   return (
//     <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
//       <h2 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>All Books are Here</h2>
//       <div 
//         style={{ 
//           display: 'grid', 
//           gap: '2rem', 
//           marginTop: '3rem', 
//           marginBottom: '3rem', 
//           gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' 
//         }}
//       >
//         {
//           books.map(item => (
//             <div 
//               style={{ 
//                 border: '1px solid #ddd', 
//                 borderRadius: '8px', 
//                 padding: '1rem', 
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                 textAlign: 'center',
//                 backgroundColor: '#fff',
//                 transition: 'transform 0.3s ease',
//                 cursor: 'pointer'
            
//               }}
//               key={item._id}
//             >
//               <img 
//                 src={item.book.imageURL} 
//                 alt={item.book.bookTitle} 
//                 style={{ width: '100%', height: 'auto', borderRadius: '4px' }} 
//               />
//               <h5 
//                 style={{ 
//                   fontSize: '1.5rem', 
//                   fontWeight: 'bold', 
//                   marginTop: '1rem', 
//                   color: '#333'
//                 }}
//               >
//                 {item.book.bookTitle}
//               </h5>
//               <p style={{ fontSize: '1rem', color: '#555', marginTop: '0.5rem' }}>
//                 Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
//               </p>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
  
// }

// export default Shop
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
      <h2 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>All Books are Here</h2>
      <div
        style={{
          display: 'grid',
          gap: '2rem',
          marginTop: '3rem',
          marginBottom: '3rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
        }}
      >
        {books.map(item => (
          <div
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              backgroundColor: '#fff',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            key={item._id}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src={item.book.imageURL}
              alt={item.book.bookTitle}
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
            />
            <h5
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginTop: '1rem',
                color: '#333'
              }}
            >
              {item.book.bookTitle}
            </h5>
            <p style={{ fontSize: '1rem', color: '#555', marginTop: '0.5rem' }}>
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Link to={`/book/buy/${item._id}`}><button className="btn btn-primary">Buy Now</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

