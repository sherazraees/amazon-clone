import React from "react";
import { useStateValue } from "../../store/StateProvider";
import "./CheckoutProduct.css";
function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeToCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProductImage" src={image} alt="" />

      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index.toString()}>🌟</p>
            ))}
        </div>

        <button onClick={removeToCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
