import React from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({allRestaurants, setAllRestaurants, filterNeighborhood, filterCuisine, filterVisited}){

    const filteredByNeighborhood = allRestaurants.filter(restaurant => {
        if((filterNeighborhood === "Neighborhood") || (filterNeighborhood === restaurant.neighborhood)) return true 
        // if((filterCuisine === "Cuisine") || (filterCuisine === restaurant.cuisine)) return true
    })

    // const filteredByCuisine = allRestaurants.filter(restaurant => {
    //     if(filterCuisine === "Cuisine") return true
    //     if(filterCuisine === restaurant.cuisine) return true 
    // })

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