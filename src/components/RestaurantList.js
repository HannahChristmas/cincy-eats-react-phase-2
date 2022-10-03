import React from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({allRestaurants, setAllRestaurants, filterNeighborhood, filterCuisine, filterVisited}){

    const filteredByAllCriteria = allRestaurants.filter(restaurant => {
        if((filterNeighborhood === "Neighborhood" || restaurant.neighborhood === filterNeighborhood) 
        && (filterCuisine === "Cuisine" || restaurant.cuisine === filterCuisine)
        && (filterVisited === "Have you visited?" || restaurant.visited.toString() === filterVisited)) {
                return true
            }
    }) 

    const restaurantsOnInitialRender = filteredByAllCriteria.map(restaurant => {
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