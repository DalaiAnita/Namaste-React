
const RestaurantCard = ({restData}) => {
  const {name, cuisine, caloriesPerServing, rating, prepTimeMinutes, image} = restData;
  console.log('RestCard data--->', restData);
  return (
    <div className="card">
      <img
        className="card-img"
        src={image}
        alt="Recipe"
      />

      <div className="card-body">
        <h3>{name}</h3>

        <div className="card-info">
          <span className="rating">⭐ {rating}</span>
          <span className="delivery-time">⏱️ {prepTimeMinutes}</span>
        </div>

        <p className="cuisines">{cuisine}</p>

        <p className="price">{caloriesPerServing}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;