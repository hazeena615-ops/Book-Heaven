

import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Add fade-in animation to text when the component mounts.
    const aboutText = document.querySelectorAll('.about-text');
    aboutText.forEach((el) => {
      el.classList.add('fade-in');
    });
  }, []);

  return (
    <div style={styles.aboutContainer}>
      {/* Header Section */}
      <div className="header" style={styles.header}>
        <h1>About Us</h1>
      </div>

      {/* Main Content Section */}
      <div style={styles.aboutContent}>
        <div className="image-container" style={styles.imageContainer}>
          <img
            src="/About.jpg" // Make sure the path is correct or use a URL
            alt="Bookstore"
            style={styles.image}
          />
        </div>

        {/* Text Content */}
        <div className="about-text" style={styles.aboutText}>
          <h2>Welcome to Our Online Bookstore</h2>
          <p>
            At our online bookstore, we believe that books can inspire, educate, and entertain. We are passionate about curating an exceptional collection of books that cater to every taste and interest.
          </p>
          <p>
            Whether you're a bookworm looking for your next read, a casual reader, or searching for the perfect gift, we offer a wide range of genres, including fiction, non-fiction, academic, and children's books.
          </p>
        </div>

        <div className="about-text" style={styles.aboutText}>
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide an easy, convenient, and enjoyable book-buying experience for book lovers all around the world. We strive to ensure that everyone has access to great books at affordable prices, and we believe in delivering exceptional customer service.
          </p>
        </div>

        <div className="about-text" style={styles.aboutText}>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Extensive collection of books across various genres.</li>
            <li>Fast, reliable shipping right to your doorstep.</li>
            <li>Customer-first approach to ensure satisfaction.</li>
            <li>Competitive pricing with frequent discounts and offers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  aboutContainer: {
    padding: '3rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333',
  },
  aboutContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  aboutText: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#555',
    padding: '1.5rem',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    opacity: 1, // Ensure the opacity is set to 1 initially
    transform: 'translateX(0)', // Ensure it's visible on load
    transition: 'opacity 1s ease, transform 1s ease', // Transition for smooth effect
  },
};

// CSS animation classes (Add this to your global CSS or inline if you prefer)
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  .fade-in {
    opacity: 1 !important;
    transform: translateX(0) !important;
  }
`, styleSheet.cssRules.length);

export default About;

