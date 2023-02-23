// import React from "react";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer>
//       <div className="footer-container">
//         <div className="footer-section">
//           <h3>Get to Know Us</h3>
//           <ul>
//             <li>About Us</li>
//             <li>Careers</li>
//             <li>Press Releases</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Make Money with Us</h3>
//           <ul>
//             <li>Sell on Amazon</li>
//             <li>Sell Under Amazon Accelerator</li>
//             <li>Become an Affiliate</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Amazon Payment Products</h3>
//           <ul>
//             <li>Amazon Business Card</li>
//             <li>Shop with Points</li>
//             <li>Reload Your Balance</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Let Us Help You</h3>
//           <ul>
//             <li>Amazon and COVID-19</li>
//             <li>Your Account</li>
//             <li>Your Orders</li>
//             <li>Shipping Rates & Policies</li>
//             <li>Returns & Replacements</li>
//             <li>Manage Your Content and Devices</li>
//             <li>Amazon Assistant</li>
//             <li>Help</li>
//           </ul>
//         </div>
//       </div>
//       <hr />
//       <div className="footer-bottom">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/2000px-Amazon.com-Logo.svg.png"
//           alt="Amazon Logo"
//         />
//         <div className="footer-bottom-links">
//           <ul>
//             <li>Conditions of Use</li>
//             <li>Privacy Notice</li>
//             <li>Interest-Based Ads</li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell Under Amazon Accelerator</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Let Us Help You</h3>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bottom-links">
        <div className="footer-space">
          <span>Conditions of Use</span>
          <span>Privacy Notice </span>
          <span>Your Ads Privacy Choices</span>
        </div>
        <div>© 1996-2023, Amazon.com, Inc. or its affiliates</div>
      </div>
    </footer>
  );
}

export default Footer;
