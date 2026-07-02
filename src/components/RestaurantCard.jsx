import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisine, rating, caloriesPerServing, image, prepTimeMinutes } =
    resData;
  return (
    <div className="card">
      <img
        className="card-img"
        src={ image }
        alt="restaurant"
      />

      <div className="card-body">
        <h3>{name}</h3>
        <div className="card-info">
          <span className="rating">⭐ {rating} </span>
          <span className="delivery-time">⏱️ {prepTimeMinutes} mins</span>
        </div>
        <p className="cuisines">{cuisine}</p>

        <p className="price">{caloriesPerServing}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;