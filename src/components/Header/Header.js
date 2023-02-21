import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="headerImg"
        src="https://images-na.ssl-images-amazon.com/images/G/01/gno/images/general/backup-logo_blue._CB481621655_.png"
      />

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
