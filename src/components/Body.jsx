import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setALlRestaurants] = useState([]);
  const [filteredRestaurants, setFilterredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  //Fetch API data here
  const fetchData = async () => {
    const responseData = await fetch("https://dummyjson.com/recipes");
    const data = await responseData.json();
    const finalData =  data.recipes;
    setALlRestaurants(finalData);
    setFilterredRestaurants(finalData);
  };

  // Restaurants search functionality

  const searchRestaurants = () => {
    const filteredData = allRestaurants.filter((restaurant) => {
      return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilterredRestaurants(filteredData);
  };

  return allRestaurants.length === 0 ? <Shimmer /> : 
   (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(event) => {
            const text = event.target.value;
            setSearchText(text);
            searchRestaurants(text);
          }}
          placeholder="Search Recipes..."
        />

        <button onClick={searchRestaurants}>Search</button>

        <button
          onClick={() => {
            const filteredRestaurantListData = allRestaurants.filter(
              (restaurant) => restaurant?.info?.avgRating > 4.2,
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
          <Link to={`/restaurant/${rest.id}`}  key={rest.id} ><RestaurantCard restData={rest} /></Link>
        ))}
      </div>
    </div>
  );

};

export default Body;
