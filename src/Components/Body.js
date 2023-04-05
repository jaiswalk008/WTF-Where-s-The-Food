import {restaurantList} from "../constants"
import RestaurantCard from "./RestaurantCard"
export default Body = ()=>{
    let searchText='KFC'
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" 
                placeholder="search" value={searchText} onChange={(e) => {
                    searchText =e.target.value;
                    console.log(searchText);
                }}/>
                <button className="search-button">search</button>
            </div>
            <div className="restaurant-list">
           
                {restaurantList.map( (restaurant) =>{
                     return <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
                 })}
            </div>
        </>
    )
}
