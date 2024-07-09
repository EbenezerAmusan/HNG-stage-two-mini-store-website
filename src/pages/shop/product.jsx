import React from "react";

const Product = (props) => {
  const { productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <b>
          <p>{productName}</p>
        </b>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn">Add to Cart</button>
    </div>
  );
};

export default Product;
