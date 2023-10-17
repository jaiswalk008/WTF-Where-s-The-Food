import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {IMG_CDN_URL} from '../constants';
import Shimmer from "./Shimmer";
const RestaurantMenu = () =>{
    const {id} = useParams();
    console.log(id)
    const [restaurant , setRestaurant] = useState([])
    // console.log(params);
    useEffect(() =>{
        getRestaurantMenu();
    },[]);
    async function getRestaurantMenu(){
        const res = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5830002&lng=88.3372909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const data = res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        const rest = data.filter((element) => element.info.id===id)
        
        setRestaurant(rest[0].info);
        
    }
  
    return (restaurant.length===0)? (<Shimmer/>) :
        (<div>
           <div>
            <img src={''+IMG_CDN_URL+restaurant?.cloudinaryImageId} alt={restaurant.name+" logo"} />
            <h2>{restaurant.name}</h2> 
            <h3>{restaurant.cuisines?.join(', ')}</h3>
            <div>
                <span style={{backgroundColor:"green",color:"white"}}>{restaurant.avgRating} *</span>
                <span>{restaurant.costForTwo}</span>
            </div>
           </div>
        </div>)
        
    
}
export default RestaurantMenu;