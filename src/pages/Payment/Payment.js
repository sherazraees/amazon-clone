import React, { useState, useEffect } from "react";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import Header from "../../components/Header";
import { useStateValue } from "../../store/StateProvider";
import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../store/reducer";
import axios from "../../utilities/axios";
import { db } from "../../firebase";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigation = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      console.log("Response", response);
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async ({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        const userDocRef = doc(db, "users", user?.uid);
        const ordersCollectionRef = collection(userDocRef, "orders");
        const orderDocRef = doc(ordersCollectionRef, paymentIntent.id);

        await setDoc(orderDocRef, {
          cart: cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_CART",
        });
        navigation("/orders");
        //     history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

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
                  key={item.id}
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

            <div className="paymentDetails">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="paymentPriceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>

                {/* Errors */}
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
