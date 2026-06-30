import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";

// * Header
// *----Logo
// *----Nav Items

// * Body
// * ----Search
// * ----RestaurantContainer
// * ----ResturantCard
// * ----Image
// * ----Name of Restaurants, star rating, Cuisines, delivery time etc

// * Footer
// * ----Copyright
// * ----Links
// * ----Address
// * ----Contact

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
