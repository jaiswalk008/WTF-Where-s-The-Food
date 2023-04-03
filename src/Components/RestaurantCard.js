
import {IMG_CDN_URL} from "../constants"
const RestaurantCard= ({name,cuisines,avgRating,costForTwoString,cloudinaryImageId})=>{
    return(
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2> 
            <h3>{cuisines.join(', ')}</h3>
            <div>
                <span style={{backgroundColor:"green",color:"white"}}>{avgRating} *</span>
                <span>{costForTwoString}</span>
            </div>
        </div>
    )
}
export default RestaurantCard;