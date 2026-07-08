import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({restData}) => {
  const {name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId} = restData.info;
  return (
    <div className="card">
      <img
        className="card-img"
        src={CDN_URL + cloudinaryImageId}
        alt="Recipe"
      />

      <div className="card-body">
        <h3>{name}</h3>

        <div className="card-info">
          <span className="rating">⭐ {avgRating}</span>
          <span className="delivery-time">⏱️ {sla.slaString}</span>
        </div>

        <p className="cuisines">{cuisines}</p>

        <p className="price">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;