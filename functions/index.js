const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MeDHxLQDfHe2MGeuwzOoQaukk0pa1KCKmSXmKtLWeSnv3jF3lQeywv02xnOVvdkA9fABtulpFQZegHvOJlDys8c00XhI9JxoM"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get("/", (req, res) => {
  return res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);
