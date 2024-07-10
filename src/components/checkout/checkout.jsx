import React, { useState } from "react";
import "./checkout.css";

const Checkout = ({ totalAmount }) => {
  const [cardDetails, setCardDetails] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Payment details submitted:", cardDetails);
  };

  return (
    <div className="checkout">
      <h2>Payment Info.</h2>
      <form onSubmit={handleSubmit}>
        <div className="payment-method">
          <label>Payment method</label>
          <div className="card-icons">
            <img src="/path/to/visa.png" alt="Visa" />
            <img src="/path/to/mastercard.png" alt="Mastercard" />
            <img src="/path/to/paypal.png" alt="Paypal" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cardholderName">Cardholder's name</label>
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            value={cardDetails.cardholderName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={cardDetails.expiryDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={cardDetails.cvv}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="checkout-summary">
          <div className="summary-item">
            <span>Subtotal</span>
            <span>N{totalAmount}</span>
          </div>
          <div className="summary-item">
            <span>Delivery</span>
            <span>N2000</span>
          </div>
          <div className="summary-item">
            <span>Total</span>
            <span>N{totalAmount + 2000}</span>
          </div>
        </div>
        <div className="save-details">
          <input type="checkbox" id="saveDetails" name="saveDetails" />
          <label htmlFor="saveDetails">Save details for future payments</label>
        </div>
        <button type="submit" className="checkout-button">Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
