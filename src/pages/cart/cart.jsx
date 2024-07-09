import React, { useState } from "react";
import Header from "../../components/header/header";
import CartItem from "../../components/cartItem/cartItem";
import DiscountSection from "../../components/discountSection/discountSection";
import DeliveryOptions from "../../components/deliveryOptions/deliveryOptions";
import CheckoutSummary from "../../components/checkoutSummary/checkoutSummary";
import { PRODUCTS } from "../../components/products"; 
import "./cart.css";

const Cart = () => {
  const [items, setItems] = useState(PRODUCTS.map(product => ({
    ...product,
    quantity: 1, 
    totalPrice: `N${product.price}` 
  })));

  const handleDelete = (item) => {
    setItems(items.filter((i) => i.id !== item.id));
  };

  const handleQuantityChange = (item, quantity) => {
    setItems(
      items.map((i) =>
        i.id === item.id
          ? {
              ...i,
              quantity: Number(quantity),
              totalPrice: `N${Number(quantity) * item.price}`,
            }
          : i
      )
    );
  };

  const totalAmount = items.reduce(
    (acc, item) => acc + Number(item.totalPrice.replace("N", "")),
    0
  );

  return (
    <div className="cart-wrapper">
      <Header />
      <div className="cart">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onDelete={handleDelete}
            onQuantityChange={handleQuantityChange}
          />
        ))}
        <DiscountSection />
        <DeliveryOptions />
        <CheckoutSummary totalAmount={totalAmount} />
      </div>
    </div>
  );
};

export default Cart;
