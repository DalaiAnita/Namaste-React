
const RestaurantCard = ({restData}) => {
  console.log('Res Crs Comp', restData);
  const {name, cuisine, caloriesPerServing, rating, prepTimeMinutes, image} = restData;
  return (
    <div className="card px-4 py-2">
      <img
        className="w-56 rounded-lg"
        src={image}
        alt="Recipe"
      />

      <div className="card-body bg-slate-200 h-30">
        <h3 className="w-56 text-lg font-bold px-2 overflow-hidden">{name}</h3>

        <div className="card-info flex">
          <span className="rating px-2">⭐ {rating}</span>
          <span className="delivery-time">⏱️ {prepTimeMinutes}</span>
        </div>

        <p className="cuisines px-2">{cuisine}</p>
        <p className="price px-2">{caloriesPerServing}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;