import { useEffect, useState } from "react"




const useRestaurantMenu = (id) => {

    const [menuData, setMenuData] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [id]);

    const fetchMenu = async () => {
        const data = await fetch(`https://dummyjson.com/recipes/${id}`);
        const responseData = await data.json();
        console.log('data -->', responseData);

        setMenuData(responseData);
    }

    return menuData;
}

export default useRestaurantMenu;