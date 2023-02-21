import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { headerImg } from "../../utilities/urls";

function Header() {
  return (
    <div className="header">
      <img className="headerImg" src={headerImg} />

      <div className="headerSearch">
        <input className="headerSearchInput" typpe="text" />
        <SearchIcon className="headerSearchIcon" />
      </div>

      <div className="headerNav">
        <div className="headerOption">
          <span className="headerOptionLineOne">Hello Guest</span>
          <span className="headerOptionLineTwo">Sign In</span>
        </div>

        <div className="headerOption">
          <span className="headerOptionLineOne">Returns</span>
          <span className="headerOptionLineTwo">& Orders</span>
        </div>

        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>

        <div className="headerOptionBasket">
          <ShoppingBasketIcon />
          <span className="headerOptionLineTwo headerBasketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
