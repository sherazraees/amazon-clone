import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { headerImg } from "../../utilities/urls";
import { Link } from "react-router-dom";
import { useStateValue } from "../../store/StateProvider";

function Header() {
  const [{ cart, dispatch }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="headerImg" src={headerImg} />
      </Link>
      <div className="headerSearch">
        <input className="headerSearchInput" typpe="text" />
        <SearchIcon className="headerSearchIcon" />
      </div>

      <div className="headerNav">
        <Link to="/Login">
          <div className="headerOption">
            <span className="headerOptionLineOne">Hello Guest</span>
            <span className="headerOptionLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="headerOption">
          <span className="headerOptionLineOne">Returns</span>
          <span className="headerOptionLineTwo">& Orders</span>
        </div>

        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>

        <Link to="/Checkout">
          <div className="headerOptionBasket">
            <ShoppingBasketIcon />
            <span className="headerOptionLineTwo headerBasketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
