import { useState , useEffect } from "react";
import axios from "axios";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState([]);
  // console.log(params);
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    const res = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5830002&lng=88.3372909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data =
      res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    
    const rest = data.filter((element) => element.info.id === id);
   
    setRestaurant(rest[0].info);
     
  
  }
    return restaurant;
};
export default useRestaurant;   