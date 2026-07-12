import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const {id} = useParams();
  console.log('param', id);

  useEffect(()=>{
    fetchMenu();
  },[]);

  //just added the logic, but here the swiggy restaurant menu api fails due to some restrictions from Swiggy

  const fetchMenu = async () =>{
    // const menuData = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9341967&lng=77.7241821&restaurantId=" + id)
    // const jsonData = await menuData.json();
    // console.log('hello-->', jsonData);

}


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
      </div>
    </div>
  );
};

export default RestaurantMenu;
