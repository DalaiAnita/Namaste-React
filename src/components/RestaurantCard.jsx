const RestaurantCard = ({ restData }) => {
  const { name, cuisine, caloriesPerServing, rating, prepTimeMinutes, image } =
    restData;

  return (
    <div className="card p-4">
      <div className="bg-slate-300 rounded-xl w-64 overflow-hidden shadow-md">
        <img className="w-full h-44 object-cover" src={image} alt={name} />

        <div className="p-4">
          <h3 className="text-lg font-bold truncate">{name}</h3>

          <div className="flex items-center gap-4 mt-2">
            <span>⭐ {rating}</span>
            <span>⏱️ {prepTimeMinutes} mins</span>
          </div>

          <p className="text-sm text-gray-700 mt-2">{cuisine}</p>

          <p className="font-semibold mt-1">{caloriesPerServing} cal</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;


export const withPromotedLabel = (RestaurantCard) => {
  return (props) =>{
    return (
      <div>
        <label className="absolute m-4 p-1 bg-zinc-800 text-white rounded-sm">⭐ Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}