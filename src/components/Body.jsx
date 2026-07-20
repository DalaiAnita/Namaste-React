import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/hooks/useOnlineStatus";

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
    const finalData = data.recipes;
    setALlRestaurants(finalData);
    setFilterredRestaurants(finalData);
  };

  // Restaurants search functionality

  const searchRestaurants = () => {
    const filteredData = allRestaurants.filter((restaurant) => {
      return restaurant?.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilterredRestaurants(filteredData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline...Please check your internet connection
      </h1>
    );
  }
    return allRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body m-4">
        <div className="p-4">
          <input className="border border-solid border-gray-600 px-4 rounded-md w-100 py-2"
            type="text"
            value={searchText}
            onChange={(event) => {
              const text = event.target.value;
              setSearchText(text);
              searchRestaurants(text);
            }}
            placeholder="Search Recipes..."
          />

          <button className="px-4 mx-4 py-2 bg-green-200 rounded-md" onClick={searchRestaurants}>Search</button>

          <button  className="px-4 mx-4 py-2 bg-orange-900 rounded-md text-white hover:text-slate-500"
            onClick={() => {
              const filteredRestaurantListData = allRestaurants.filter(
                (restaurant) => restaurant?.rating > 4.7,
              );
              setFilterredRestaurants(filteredRestaurantListData);
            }}
          >
            Top Rated Restaurants
          </button>

          <button  className="px-4 mx-4 py-2 bg-slate-950 rounded-md text-white"
            onClick={() => {
              setSearchText("");
              setFilterredRestaurants(allRestaurants);
            }}
          >
            Reset
          </button>
        </div>

        <div className="flex flex-wrap p-4 m-4">
          {filteredRestaurants.map((rest) => (
            <Link to={`/restaurant/${rest.id}`} key={rest.id}>
              <RestaurantCard restData={rest} />
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Body;
