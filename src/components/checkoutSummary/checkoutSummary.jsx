import React from 'react';
import './checkoutSummary.css';

const CheckoutSummary = ({ totalAmount }) => {
  return (
    <div className="checkout-summary">
      <div className="total">
        <p>Total</p>
        <p>N{totalAmount}</p>
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}

export default CheckoutSummary;
