import { useEffect, useState } from "react";

const RestaurantMenu = () => {


  return (
    <div>
      <h2>Pizza Hut</h2>
      <img
        className="card-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/42eb0361-ebd7-4570-affe-a6894ea0d2ee_10583.JPG"
        alt="Recipe"
      />
      <div className="card-info">
        <span className="rating">⭐ 4.2(20K+ ratings) . ₹350 for two</span>
        <span className="delivery-time">⏱️ 8</span>
         <span className="rating">⭐ 4.2(20K+ ratings) . ₹350 for two</span>
        <span className="delivery-time">⏱️ 8</span>
      </div>
    </div>
  );
};

export default RestaurantMenu;
