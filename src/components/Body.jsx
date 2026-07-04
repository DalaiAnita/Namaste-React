


import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
const [allRestaurants, setALlRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  }, [])

  //Fetch API data here
  const fetchData = async () => {
    const responseData = await fetch("https://dummyjson.com/recipes")
    const data = await responseData.json();
    setALlRestaurants(data.recipes);
  }
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Recipes..." />

        <button>Search</button>

        <button>Top Rated Restaurants</button>

        <button>Reset</button>
      </div>

      <div className="res-container">
        {allRestaurants.map((rest)=>(
           <RestaurantCard 
              key={rest.id}
              restData = {rest}
       />
        ))}
      
      </div>
    </div>
  );
};

export default Body;
