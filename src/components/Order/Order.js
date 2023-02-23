import moment from "moment/moment";
import React from "react";
import CheckoutProduct from "../../components/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import "./Order.css";
function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="orderId">
        <small>{order.id}</small>
      </p>
      {order.cart?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          hiddenBtn
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="orderTotal">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.amount / 100} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
