import React from "react";
import "./Checkout.css";
import SubTotal from "../../components/SubTotal";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../store/StateProvider";
import Header from "../../components/Header";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkoutLeft">
          <img
            className="checkoutAd"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />

          <div>
            <h5
              style={{
                marginLeft: "10px",
              }}
            >
              {user?.email}
            </h5>
            <h2 className="checkoutTitle">Your shopping Basket</h2>
            {cart.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>

        <div className="checkoutRight">
          <SubTotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
