import React from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({allRestaurants, setAllRestaurants, filterNeighborhood}){

    const filteredByNeighborhood = allRestaurants.filter(restaurant => {
        if(filterNeighborhood === "") return true
        if(filterNeighborhood === restaurant.neighborhood) return true 
    })

    const restaurantsOnInitialRender = filteredByNeighborhood.map(restaurant => {
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