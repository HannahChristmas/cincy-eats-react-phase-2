import React from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({allRestaurants, setAllRestaurants}){

    const restaurantsOnInitialRender = allRestaurants.map(restaurant => {
        return (
            <RestaurantCard restaurant={restaurant} allRestaurants={allRestaurants} setAllRestaurants={setAllRestaurants}/>
        )
    })

    return(

        <div>
        <h1>All of Our Restaurants</h1>
        {restaurantsOnInitialRender}
        </div>
    )
}

export default RestaurantList;