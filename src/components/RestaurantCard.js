import React from "react";

function RestaurantCard({restaurant}){

    return(
        <div>
            <h1>{restaurant.name}</h1>
            <h3>{restaurant.neighborhood}</h3>
            <h3>{restaurant.cuisine}</h3>
            <ul><a href={restaurant.instagram}>Instagram</a></ul>
            <ul><a href={restaurant.website}>Website</a></ul>
            <ul><a href={restaurant.menu}>Menu</a></ul>
        </div>
    )
}

export default RestaurantCard;