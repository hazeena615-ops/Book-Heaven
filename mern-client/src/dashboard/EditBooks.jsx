import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const EditBooks = () => {
  const{id} = useParams();
  const data = useLoaderData(); // Get the loader data
  const { book } = data; // Destructure the `book` object from the data
  const {
    bookTitle,
    authorName,
    imageURL,
    bookDescription,
    category,
    bookPDFUrl,
  } = book;


  
  
  const bookCategories = [
      'Fiction',
      'Non-Fiction',
      'History',
      'Mystery',
      'Science Fiction',
      'Fantasy',
      'Horror',
      'Biography',
      'Business',
      'Children',
      'Geography',
      'Art',
      'Religion',
    ];
  
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  
    const handleChangeSelectedValue = (event) => {
      setSelectedBookCategory(event.target.value);
    };
  
    // Handle book update
    const handleUpdate= (event) => {
      event.preventDefault();
      const form = event.target;
      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const bookDescription = form.bookDescription.value;
      const bookPDFUrl = form.bookPDFUrl.value;
  
      // Create the book object to match the database structure
      const bookObj = {
        book: {
          bookTitle,
          authorName,
          imageURL,
          category,
          bookDescription,
          bookPDFUrl,
        },
      };
  
      console.log(bookObj);
   //Update the book data
   fetch (`http://localhost:5000/book/${id}`,{
    method:"PATCH",
    headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(bookObj),
  }).then((res) => res.json())
  .then((data) => {
    alert('Book updated successfully!');
    // form.reset();
    // setSelectedBookCategory(bookCategories[0]); // Reset category
  });
      
      
    };
   
  
    return (
      <div className="container mt-4">
        <h2 className="text-center fw-bold mb-4">Update a Book</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="bookTitle" className="form-label">
              Book Title
            </label>
            <input
              type="text"
              name="bookTitle"
              className="form-control w-100"
              id="bookTitle"
              placeholder="Book name"
              style={{ maxWidth: '1000px' }}
              defaultValue={bookTitle}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="authorName" className="form-label">
              Author Name
            </label>
            <input
              type="text"
              name="authorName"
              className="form-control w-100"
              id="authorName"
              placeholder="Author name"
              style={{ maxWidth: '1000px' }}
              defaultValue={authorName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageURL" className="form-label">
              Book Image
            </label>
            <input
              type="text"
              name="imageURL"
              className="form-control w-100"
              id="imageURL"
              placeholder="Paste URL"
              style={{ maxWidth: '1000px' }}
              defaultValue={imageURL}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputState" className="form-label">
              Book Category
            </label>
            <select
              className="form-select"
              id="inputState"
              name="categoryName"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
              style={{ maxWidth: '1000px' }}
              defaultValue={category}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="bookDescription" className="form-label">
              Book Description
            </label>
            <textarea
              className="form-control"
              placeholder="Write your Book Description"
              id="bookDescription"
              name="bookDescription"
              style={{ maxWidth: '1000px' }}
              defaultValue={bookDescription}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="bookPDFUrl" className="form-label">
              Book PDF
            </label>
            <input
              type="text"
              name="bookPDFUrl"
              className="form-control w-100"
              id="bookPDFUrl"
              placeholder="Paste URL"
              style={{ maxWidth: '1000px' }}
              defaultValue={bookPDFUrl}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ maxWidth: '1000px' }}
          >
            Update Book
          </button>
        </form>
      </div>
    );   
};

export default EditBooks
