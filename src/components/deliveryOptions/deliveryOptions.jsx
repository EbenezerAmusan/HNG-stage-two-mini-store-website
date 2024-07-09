import React from 'react';
import './deliveryOptions.css';

const DeliveryOptions = () => {
  return (
    <div className="delivery-options">
      <label htmlFor="delivery">Delivery</label>
      <select id="delivery">
        <option value="inDrive">inDrive - N2000</option>
        {/* Add more delivery options as needed */}
      </select>
    </div>
  );
}

export default DeliveryOptions;
