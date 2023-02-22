import React from "react";
import { useStateValue } from "../../../store/StateProvider";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index.toString()}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToCart}>Add to Basket</button>
    </div>
  );
}

export default Product;
