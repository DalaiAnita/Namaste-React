import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import Accordion from "./Accordion";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [openAccordion, setOpenAccordion] = useState(null);

  const menuData = useRestaurantMenu(id);

  const handleAccordionClick = (section) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  return menuData === null ? (
    <Shimmer />
  ) : (
    <div className=" bg-white shadow-lg">
      <Accordion
        title="Instructions"
        isOpen={openAccordion === "Instructions"}
        onClick={() => handleAccordionClick("Instructions")}
      >
        {menuData.instructions.map((step, index) => (
          <p className="p-2" key={index}>
            {index + 1}.{step}
          </p>
        ))}
      </Accordion>
      <Accordion
        title="Ingredients"
        isOpen={openAccordion === "Ingredients"}
        onClick={() => handleAccordionClick("Ingredients")}
      >
        {menuData.ingredients.map((step, index) => (
          <p className="p-2" key={index}>
            {index + 1}.{step}
          </p>
        ))}
      </Accordion>

      <Accordion title="Tags" isOpen={openAccordion === "Tags"} onClick={() => handleAccordionClick("Tags")}>
        {menuData.tags.map((step, index) => (
          <p className="p-2" key={index}>
            {index + 1}.{step}
          </p>
        ))}
      </Accordion>
    </div>
  );
};

export default RestaurantMenu;
