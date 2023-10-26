
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from '../constants';
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () =>{
    const {id} = useParams();
    //console.log(id)
    
    const restaurant = useRestaurant(id);
    
    return (!restaurant)? (<Shimmer/>) :
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