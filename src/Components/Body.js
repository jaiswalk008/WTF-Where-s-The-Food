import {restaurantList} from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react"
export default Body = ()=>{
    const [searchText, setSearchText] = useState("");
    return (
        <>
            <div className="search-container">
                <input  type="text" className="search-input" 
                placeholder="search" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                
                <button style={{backgroundColor:"black", color:"white",margin:"5px",height:"30px",borderRadius:"5px"}}
                 className="search-button">search {searchText}</button>
            </div>
            <div className="restaurant-list">
           
                {restaurantList.map( (restaurant) =>{
                     return <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
                 })}
            </div>
        </>
    )
}
