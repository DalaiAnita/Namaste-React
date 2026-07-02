import RestaurantCard from "./RestaurantCard";
import restaurantsListMockData from "../Utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

    const [restaurantsList, setRestaurantsList] = useState(restaurantsListMockData);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const responseData = await fetch(
            "https://dummyjson.com/recipes"
        );
        const data = await responseData.json();
        // console.log('data---->',data.recipes.map((recipe)=>recipe.rating > 3));
        setRestaurantsList(data.recipes);
    }

    const filterTopRestaurants = () => {

        const filteredRestaurants = restaurantsList.filter(
            (restaurant)=> restaurant.rating > 4.5
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
        {restaurantsList.map((recipe) => (
          <RestaurantCard key={recipe.id} resData={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Body;