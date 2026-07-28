import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import Accordion from "./Accordion";

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
        title="Instructions"
        isOpen={showItem === 0}
        setShowIndex={() => setShowItem(0)}
      >
        {menuData.instructions.map((step, index) => (
          <p className="p-2" key={index}>
            {index + 1}.{step}
          </p>
        ))}
      </Accordion>
      <Accordion
        title="Ingredients"
        isOpen={showItem === 1}
        setShowIndex={() => setShowItem(1)}
      >
        {menuData.ingredients.map((step, index) => (
          <p className="p-2" key={index}>
            {index + 1}.{step}
          </p>
        ))}
      </Accordion>

      <Accordion title="Tags" 
        isOpen={showItem === 2}
        setShowIndex={() => setShowItem(2)}
      >
        {menuData.tags.map((step, index) => (
          <p className="p-2 m-2" key={index}>
            {index + 1}.{step}
          </p>
        ))}
      </Accordion>

      
    </div>
  );
};

export default RestaurantMenu;
