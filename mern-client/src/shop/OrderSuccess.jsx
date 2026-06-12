// import React, { useEffect } from 'react';
// import './OrderSuccess.css'

// const OrderSuccess = () => {
//   useEffect(() => {
//     const successMessage = document.querySelector('.success-message');
//     successMessage.classList.add('fade-in');
//   }, []);

//   return (
//     <div style={{ padding: '2rem', textAlign: 'center' }}>
//       <div className="success-message" style={{ opacity: 0 }}>
//         <h2>Order Placed Successfully!</h2>
//         <p>Your order has been placed successfully. Thank you for shopping with us!</p>
//       </div>
//     </div>
//   );
// };

// export default OrderSuccess;
import React from 'react';
import './OrderSuccess.css';
 // Add your tick image

const OrderSuccess = () => {
  return (
    <div className="order-success-container">
      <img src="/image.png" alt="Success" className="tick-image" />
      <h2 className='msg'>Your order has been successfully placed!</h2>
    </div>
  );
};

export default OrderSuccess;



