import RestaurantCard from "./RestaurantCard";
import restaurantsListMockData from "../Utils/mockData";
import { useState } from "react";

const Body = () => {

    const [restaurantsList, setRestaurantsList] = useState(restaurantsListMockData);

    const filterTopRestaurants = () => {

        const filteredRestaurants = restaurantsList.filter(
            (restaurant)=> restaurant.info.avgRating > 4.5
        );

        setRestaurantsList(filteredRestaurants);
    }

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Filter Restaurants.." />
        <button onClick={filterTopRestaurants}>Top Rated Restaurants</button>
        <button onClick={()=>setRestaurantsList(restaurantsListMockData)}>Reset</button>
      </div>
      <div className="res-container">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;