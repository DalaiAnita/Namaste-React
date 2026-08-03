// Component for creating Swiggy like menu Items list to add items in the cart

const MenuItem = ({ item }) => {

    const {
        name,
        image,
        price,
        description
    } = item;

    //Logic here

    return (
        <div className="flex justify-between border-b p-4">

            <div className="w-6/12">

                <h2 className="font-bold text-lg">
                    {name}
                </h2>

                <p className="text-green-700 font-semibold">
                    ₹ {price}
                </p>

                <p className="text-gray-600 text-sm mt-2">
                    {description}
                </p>

            </div>

            <div className="relative w-3/12">

                <img
                    className="w-32 h-24 rounded-lg object-cover"
                    src={image}
                    alt={name}
                />

                <button
                    className="
                    absolute
                    bottom-0
                    left-12
                    -translate-x-1/2
                    bg-white
                    shadow-lg
                    px-5
                    py-2
                    mt-3
                    rounded-lg
                    text-green-600
                    font-bold"
                >
                    ADD
                </button>

            </div>

        </div>
    );
};

export default MenuItem;