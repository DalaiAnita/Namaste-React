import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [allRestaurants, setALlRestaurants] = useState([]);
  const [filteredRestaurants, setFilterredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, [searchText]);

  //Fetch API data here
  const fetchData = async () => {
    const responseData = await fetch("https://dummyjson.com/recipes");
    const data = await responseData.json();
    setALlRestaurants(data.recipes);
    setFilterredRestaurants(data.recipes);
  };

  // Restaurants search functionality

  const searchRestaurants = () => {
    const filteredData = allRestaurants.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilterredRestaurants(filteredData);
  };

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);

          }}
          placeholder="Search Recipes..."
        />

        <button onClick={searchRestaurants}>Search</button>

        <button
          onClick={() => {
            const filteredRestaurantListData = allRestaurants.filter(
              (restaurant) => restaurant.rating > 4.7,
            );
            setFilterredRestaurants(filteredRestaurantListData);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          onClick={() => {
            setSearchText("");
            setFilterredRestaurants(allRestaurants);
          }}
        >
          Reset
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((rest) => (
          <RestaurantCard key={rest.id} restData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
