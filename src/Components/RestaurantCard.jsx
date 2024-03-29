
import {IMG_CDN_URL} from "../constants"
import { Link } from "react-router-dom";
const RestaurantCard= ({name,cuisines,avgRating,costForTwo,cloudinaryImageId})=>{
    return(
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2> 
            <h3>{cuisines.join(', ')}</h3>
            <div>
                <span style={{backgroundColor:"green",color:"white"}}>{avgRating} *</span>
                <span>{costForTwo}</span>
            </div>
        </div>
    )
}
export default RestaurantCard;