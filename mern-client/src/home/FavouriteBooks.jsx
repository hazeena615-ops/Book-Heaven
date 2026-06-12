import React, { useEffect, useState } from 'react';
import BookCards from '../Components/BookCards';

const FavouriteBooks = () => {
  const [books, setBooks] = useState([]); // Fixed missing '='

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json()) // Fixed '>' to '=>'
      .then((data) => setBooks(data.slice(0,5)));
  }, []);

  return (
    <div>
        <BookCards books={books} headline="Best Seller Books" headlineStyle={{ color: 'rgb(165, 42, 42)' }} />
    </div>
  );
};

export default FavouriteBooks; // Fixed position
