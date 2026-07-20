import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();

  const menuData = useRestaurantMenu(id);

  return menuData === null ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <h2>{menuData.name}({menuData.cuisine})</h2>
      <img className="w-56" src={menuData.image} alt={menuData.name} />
      <div className="card-info">
        <span className="rating">⭐ {menuData.rating}</span>
        <span className="delivery-time">⏱️ {menuData.prepTimeMinutes} Mins</span>
                <span>{menuData.ingredients}</span>

      </div>
    </div>
  );
};

export default RestaurantMenu;
