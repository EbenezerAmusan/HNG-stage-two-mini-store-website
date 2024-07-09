import React from 'react';
import { PRODUCTS } from '../../components/products';
import Product from './product';
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop-container">
      <h2 className="shopTitle">Choose a category</h2>
      <div className="categories">
        <span>Dress</span>
        <span>Shoes</span>
        <span>Headgears</span>
        <span>Bouquet</span>
        <span>Fan</span>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
      <h2 className="shopTitle">Limited Edition</h2>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
