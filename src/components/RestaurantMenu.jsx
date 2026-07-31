import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import Accordion from "./Accordion";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {

  const { id } = useParams();

  const [showItem, setShowItem] = useState(null);

    const menuData = useRestaurantMenu(id);



if (menuData === null) {
  return <Shimmer />;
}

  const sections = [
    {
      title: "Instructions",
      content: menuData.instructions,
    },
    {
      title: "Ingredients",
      content: menuData.ingredients,
    },
    {
      title: "Tags",
      content: menuData.tags,
    },
  ];

//Logic for same index double click

  const handleAccordionClick = (section) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  return (
    <div className=" bg-white shadow-lg">
      
      <Accordion
        title="Ingredients"
        isOpen={showItem === 1}
        setShowIndex={() => setShowItem((prev) => (prev === 1 ? null : 1))}
      >
        {menuData.ingredients.map((ingredient, index) => {
          const item = {
            id: index + 1,
            name: ingredient,
            image: menuData.image,
            price: 49 + index * 2,
            description: `Fresh ${ingredient}`
          };
          return <MenuItem key={item.id} item = {item} />
        })}
      </Accordion>

      
    </div>
  );
};

export default RestaurantMenu;
