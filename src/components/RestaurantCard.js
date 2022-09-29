import React, {useState} from "react";

function RestaurantCard({restaurant}){
const [isVisited, setIsVisited] = useState(true)

    return(
        <div>
            <h1>{restaurant.name}</h1>
            <h3>{restaurant.neighborhood}</h3>
            <h3>{restaurant.cuisine}</h3>
            <ul><a href={restaurant.instagram}>Instagram</a></ul>
            <ul><a href={restaurant.website}>Website</a></ul>
            <ul><a href={restaurant.menu}>Menu</a></ul>
            {isVisited ? (
            <button onClick={() => setIsVisited(!isVisited)}>It's still on the list!</button>
            ) : (
            <button onClick={() => setIsVisited(!isVisited)}>We've been to this spot!</button>    
            )}
        </div>
    )
}

export default RestaurantCard;