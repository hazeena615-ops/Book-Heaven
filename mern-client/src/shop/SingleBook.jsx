// import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, book } = useLoaderData();
  const { bookTitle, imageURL, authorName, category, bookPDFUrl, bookDescription } = book;

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start",
        padding: "2rem",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      {/* Book Image */}
      <div
        style={{
          width: "250px",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={imageURL}
          alt={bookTitle}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Book Details */}
      <div style={{ flex: 1 }}>
        <h4
          style={{
            color: "#888",
            fontSize: "1rem",
            fontStyle: "italic",
            marginBottom: "0.5rem",
          }}
        >
          {category}
        </h4>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
            color: "#333",
          }}
        >
          {bookTitle}
        </h1>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "normal",
            color: "#666",
            marginBottom: "1rem",
          }}
        >
          {authorName}
        </h2>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.5",
            color: "#555",
            marginBottom: "2rem",
          }}
        >
          {bookDescription}
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href={bookPDFUrl}
            style={{
              textDecoration: "none",
              backgroundColor: "#28a745",
              color: "#fff",
              padding: "0.8rem 1.5rem",
              borderRadius: "5px",
              fontSize: "1rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Want to Read
          </a>
          <Link >
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "0.8rem 1.5rem",
              borderRadius: "5px",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
