import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    landmark: "",
    paymentMethod: "UPI", // Default to UPI
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    // Add logic to process the order here
    navigate("/order-success");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Details</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Name Field */}
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Address Field */}
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            style={styles.textarea}
          />
        </div>

        {/* Mobile Number Field */}
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            style={styles.input}
          />
        </div>

        {/* Landmark Field */}
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="landmark">Landmark</label>
          <input
            type="text"
            id="landmark"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        {/* Payment Method */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Payment Method</label>
          <div style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="UPI"
                checked={formData.paymentMethod === "UPI"}
                onChange={handleChange}
                style={styles.radio}
              />
              Pay with UPI
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                checked={formData.paymentMethod === "COD"}
                onChange={handleChange}
                style={styles.radio}
              />
              Cash on Delivery
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Confirm Order
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "left",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  input: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  radioGroup: {
    display: "flex",
    gap: "1rem",
  },
  radio: {
    marginRight: "0.5rem",
  },
  button: {
    padding: "0.8rem",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default PaymentPage;
