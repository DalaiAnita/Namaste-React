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
    <div className="menu-container flex m-4 p-4 gap-6">
      <img
        className="w-80 rounded-lg"
        src={menuData.image}
        alt={menuData.name}
      />

      <div className="flex flex-col justify-center">
        <h2 className="font-bold text-2xl">
          {menuData.name} ({menuData.cuisine})
        </h2>

        <div className="flex items-center gap-6 mt-3">
          <span>⭐ {menuData.rating}</span>
          <span>⏱️ {menuData.prepTimeMinutes} Mins</span>
        </div>

        <div className="mt-3 ml-3">
          <h3 className="font-semibold">Ingredients:</h3>

          {menuData.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
