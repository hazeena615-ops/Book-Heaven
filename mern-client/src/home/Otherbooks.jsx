
import React, { useEffect, useState } from 'react';
import BookCards from '../Components/BookCards';

const Otherbooks = () => {
    const [books, setBooks] = useState([]); // Fixed missing '='

    useEffect(() => {
      fetch("http://localhost:5000/all-books")
        .then((res) => res.json()) // Fixed '>' to '=>'
        .then((data) => setBooks(data.slice(6,13)));
    }, []);
  
    return (
      <div>
          <BookCards books={books} headline="Other Books"/>
      </div>
    );
}

export default Otherbooks
