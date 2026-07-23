import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import Accordion from "./Accordion";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [showInstructions, setShowInstructions] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);

  const menuData = useRestaurantMenu(id);
  console.log(menuData);
  const handleInstructionsClick = () => {
    setShowInstructions(!showInstructions);
  };

  const handleIngredientsClick = () => {
    setShowIngredients(!showIngredients);
  };
  return menuData === null ? (
    <Shimmer />
  ) : (
    <div className=" bg-white shadow-lg">
      <Accordion
        title="Instructions"
        isOpen={showInstructions}
        onClick={handleInstructionsClick}
      >
        {menuData.instructions.map((step, index) => (
          <p key={index}>
            {index + 1}.{step}
          </p>
        ))}
      </Accordion>
      <Accordion
        title="Ingredients"
        isOpen={showIngredients}
        onClick={handleIngredientsClick}
      >
        {menuData.ingredients.map((step, index) => (
          <p key={index}>
            {index + 1}.{step}
          </p>
        ))}
      </Accordion>
    </div>
  );
};

export default RestaurantMenu;
