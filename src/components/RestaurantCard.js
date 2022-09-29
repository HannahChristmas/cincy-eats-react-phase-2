import React from "react";

function RestaurantCard({restaurant}){

    return(
        <div>
            <h1>{restaurant.name}</h1>
            <h2>{restaurant.neighborhood}</h2>
        </div>
    )
}

export default RestaurantCard;