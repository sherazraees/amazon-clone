import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../store/StateProvider";
import { getCartTotal } from "../../store/reducer";
import { useNavigate } from "react-router-dom";

function SubTotal() {
  const navigation = useNavigate();
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subTotalGift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigation("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default SubTotal;
