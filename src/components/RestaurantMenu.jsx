import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import Accordion from "./Accordion";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [showItem, setShowItem] = useState(1);
  const menuData = useRestaurantMenu(id);

  if (menuData === null) {
    return <Shimmer />;
  }

  // AFTER menuData is available
  const ingredientItems = menuData.ingredients.map((ingredient, index) => ({
    id: index + 1,
    name: ingredient,
    image: menuData.image,
    price: 49 + index * 20,
    description: `Fresh ${ingredient}`,
  }));

  return (
    <div className=" bg-white shadow-lg">
      <Accordion
        title="Ingredients"
        isOpen={showItem === 1}
        setShowIndex={() => setShowItem((prev) => (prev === 1 ? null : 1))}
      >
        {ingredientItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Accordion>
    </div>
  );
};

export default RestaurantMenu;
