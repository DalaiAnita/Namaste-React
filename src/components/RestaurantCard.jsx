import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData;
  return (
    <div className="card">
      <img
        className="card-img"
        src={ CDN_URL + cloudinaryImageId }
        alt="restaurant"
      />

      <div className="card-body">
        <h3>{name}</h3>
        <div className="card-info">
          <span className="rating">⭐ {avgRating} </span>
          <span className="delivery-time">⏱️ {sla.deliveryTime} mins</span>
        </div>
        <p className="cuisines">{cuisines.join(",")}</p>

        <p className="price">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;