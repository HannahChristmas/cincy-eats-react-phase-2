import React, {useState} from "react";

function RestaurantCard({restaurant, allRestaurants, setAllRestaurants}){
const [isVisited, setIsVisited] = useState(restaurant.visited)

function handleVisitedButtonClick(){
    setIsVisited(!isVisited)
    fetch(`http://localhost:3004/restaurants/${restaurant.id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({visited: !isVisited}),
        })
        .then((response) => response.json())
        .then((updatedRestaurant) => {
            
          const patchedRestaurants = allRestaurants.map(unchangedRestaurantFromMap => unchangedRestaurantFromMap.id === restaurant.id ? updatedRestaurant : unchangedRestaurantFromMap);
          setAllRestaurants(patchedRestaurants)
      })
}

    return(
        <div className="card">
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.neighborhood}</h3>
            <h4>{restaurant.cuisine}</h4>
            <p><a href={restaurant.website}>Website</a></p>
            <p><a href={restaurant.menu}>Menu</a></p>
            <a href={restaurant.instagram}>📸</a><br/>
            {isVisited ? (
            <button onClick={handleVisitedButtonClick}>We've been to this spot!</button>
            ) : (
            <button className="isClicked" onClick={handleVisitedButtonClick}>It's still on the list!</button>    
            )}
        </div>
    )
}

export default RestaurantCard;