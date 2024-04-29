import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="naushik-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.naushik.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/couponcodegenerator">CouponCodeGenerator</Link>
        </li>
        <li>
          <Link to="/loyaltysystem">LoyaltySystem</Link>
        </li>
        <li>
          <Link to="/signuploginmodule">SignupLoginModule</Link>
        </li>
        <li>
          <Link to="/inappgifting">InAppGifting</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
