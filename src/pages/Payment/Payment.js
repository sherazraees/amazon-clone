import React from "react";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import Header from "../../components/Header";
import { useStateValue } from "../../store/StateProvider";
import "./Payment.css";
import { Link } from "react-router-dom";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div>
      <Header />
      <div className="payment">
        <div className="paymentContainer">
          <h1>Checkout ({<Link to="/Checkout">{cart?.length} items</Link>})</h1>
          <div className="paymentSection">
            <div className="paymentTitle">
              <h3>Delivery Address</h3>
            </div>
            <div className="paymentAddress">
              <p>{user?.email}</p>
              <p>2430 Valley View Road</p>
              <p>Huntington</p>
              <p>WV</p>
              <p>United States</p>
            </div>
          </div>

          <div className="paymentSection">
            <div className="paymentTitle">
              <h3>Review items and delivery</h3>
            </div>
            <div className="paymentItems">
              {cart.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
            </div>
          </div>

          <div className="paymentSection">
            <div className="paymentTitle">
              <h3>Payment Method</h3>
            </div>

            <div className="paymentDetails"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
