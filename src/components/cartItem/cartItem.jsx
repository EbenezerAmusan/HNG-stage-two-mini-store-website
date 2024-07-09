import React from 'react';
import './cartItem.css';

const CartItem = ({ item, onDelete, onQuantityChange }) => {
  return (
    <div className="cart-item">
      <img src={item.productImage} alt={item.productName} className="cart-item-image" />
      <div className="cart-item-details">
        <p>{item.productName}</p>
        <p>{`N${item.price}`}</p>
        <div className="quantity-control">
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => onQuantityChange(item, e.target.value)}
          />
        </div>
        <p>{item.totalPrice}</p>
        <button onClick={() => onDelete(item)}>X</button>
      </div>
    </div>
  );
}

export default CartItem;
