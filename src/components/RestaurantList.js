import React from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({allRestaurants, setAllRestaurants}){

    const restaurantsOnInitialRender = allRestaurants.map(restaurant => {
        return (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} allRestaurants={allRestaurants} setAllRestaurants={setAllRestaurants}/>
        )
    })

    return(

        <div>
        {restaurantsOnInitialRender}
        </div>
    )
}

export default RestaurantList;