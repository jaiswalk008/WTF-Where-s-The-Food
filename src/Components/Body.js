import {restaurantList} from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react"

function filterSearch(restaurants,searchText){
    return restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
}
export default Body = ()=>{
    const [searchText, setSearchText] = useState("");
    const [restaurants,setRestaurants] =useState(restaurantList);
    return (
        <>
            <div className="search-container">
                <input  type="text" className="search-input" 
                placeholder="search" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                    const data= filterSearch(restaurantList,searchText);
                    setRestaurants(data);
                }}/>
                
                <button style={{backgroundColor:"black", color:"white",margin:"5px", height:"100%" ,borderRadius:"5px"}}
                 className="search-button" onClick={() =>{
                    const data= filterSearch(restaurantList,searchText);
                    setRestaurants(data);
                 }}>search </button>
            </div>
            <div className="restaurant-list">
           
                {restaurants.map( (restaurant) =>{
                     return <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
                 })}
            </div>
        </>
    )
}
