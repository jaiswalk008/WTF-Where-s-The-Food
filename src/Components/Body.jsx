// import {restaurantList} from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
function filterSearch(restaurants,searchText){
    return restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
}

export default Body = ()=>{
    const [searchText, setSearchText] = useState("");//useState is used to create state variables
    //to make the ui sync with the variable we use useState because react doesnot know if the variable has changed
    // const [searchBtnClicked , setSearchBtnClicked] = useState(false);
    const [allRestaurants , setAllRestaurants] = useState([]);
    const [filteredRestaurants , setFilteredRestaurants] = useState([]);
    //if used with empty dependency array useEffect will be called once after the initial render
    //with a variable in the dependency array it will be called once after initial render and  every time the state of that variable changes

    useEffect(()=>{
        getRestaurants();
    },[]);
    async function getRestaurants(){
        // console.log('hello');
        try {
            const res = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5830002&lng=88.3372909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
            const data = res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            // console.log(data)
            setAllRestaurants(data);
            setFilteredRestaurants(data);

        } catch (error) {
            console.log(error)
        }
    }
    if(!allRestaurants) return null; // early return
    
    return (!allRestaurants.length) ?( <Shimmer/>) :  (
        
        <>
            <div className="search-container">
                {/* input is being controller by react */}
                <input type="text" className="search-input" placeholder="Search" value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                    // console.log(searchText);
                }}></input>
                <button className="search-btn" onClick={() =>{
                   const data = filterSearch(allRestaurants , searchText);
                   setFilteredRestaurants(data);
                   
                }}>Search</button>
              
            </div>
            <div className="restaurant-list">
                {filteredRestaurants?.length === 0 ? (
                    <h1>No restaurant found!!</h1>
                ) : (
                    filteredRestaurants.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/"+restaurant?.info?.id}>
                                <RestaurantCard key={restaurant?.info?.id} {...restaurant.info} />
                            </Link>
                        )
                    })
                )}
            </div>
        </>
        //
    )
}







