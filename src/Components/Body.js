import {restaurantList} from "../constants"
import RestaurantCard from "./RestaurantCard"
export default Body = ()=>{
    return (
        <div className="restaurant-list">
            {restaurantList.map( (restaurant) =>{
                return <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
            })}
        </div>
    )
}
