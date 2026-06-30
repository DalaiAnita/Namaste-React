import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../Utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Restaurants.." />
        <button>Search</button>
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