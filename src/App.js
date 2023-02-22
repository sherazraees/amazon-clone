import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./store/StateProvider";
import Payment from "./pages/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51MeDHxLQDfHe2MGe1vOIVa7XkxqG1kxF9HfKdyTOppgvH71Ngg8U2Eu9CbEfbdtU9vtDlLMRcBHZK31chPkBb25N00nmTLeRFa"
);
function App() {
  const [{}, dispatch] = useStateValue();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //  User is just signed in or user was signed
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      } else {
        // User is signed out
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route exact path="/Login" element={<Login />} />
        <Route
          exact
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
