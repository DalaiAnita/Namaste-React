import RestaurantCard from "./RestaurantCard";
import restaurantsListMockData from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseData = await fetch("https://dummyjson.com/recipes");
    const data = await responseData.json();
    setAllRestaurants(data.recipes);
    setFilteredRestaurants(data.recipes);
  };

  const TopRestaurants = () => {
    const filteredTopRestaurants = allRestaurants.filter(
      (restaurant) => restaurant.rating > 4.8,
    );
    setFilteredRestaurants(filteredTopRestaurants);
  };

  const resetData = () => { 
     setFilteredRestaurants(allRestaurants);
     setSearchText("");
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
            const filteredRestaurant = allRestaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filteredRestaurant);
          }}
          placeholder="Filter Restaurants.."
        />
        <button
          onClick={() => {
            const filteredRestaurant = allRestaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button onClick={TopRestaurants}>Top Rated Restaurants</button>
        <button onClick={resetData}>
          Reset
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((recipe) => (
          <RestaurantCard key={recipe.id} resData={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Body;
