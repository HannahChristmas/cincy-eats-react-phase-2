import React, {useState} from "react";

function RestaurantCard({restaurant, allRestaurants, setAllRestaurants}){
const [isVisited, setIsVisited] = useState(restaurant.visited)

// console.log("On render:", allRestaurants)
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
            
            // setIsVisited(!isVisited)  
            console.log(updatedRestaurant)
          const patchedRestaurants = allRestaurants.map(unchangedRestaurantFromMap => unchangedRestaurantFromMap.id === restaurant.id ? updatedRestaurant : unchangedRestaurantFromMap);
          setAllRestaurants(patchedRestaurants)
          console.log ("After set state:", patchedRestaurants)
      })
}

    return(
        <div>
            <h1>{restaurant.name}</h1>
            <h3>{restaurant.neighborhood}</h3>
            <h3>{restaurant.cuisine}</h3>
            <ul><a href={restaurant.instagram}>Instagram</a></ul>
            <ul><a href={restaurant.website}>Website</a></ul>
            <ul><a href={restaurant.menu}>Menu</a></ul>
            {isVisited ? (
            <button onClick={handleVisitedButtonClick}>True: We've been to this spot!</button>
            ) : (
            <button onClick={handleVisitedButtonClick}>False: It's still on the list!</button>    
            )}
        </div>
    )
}

export default RestaurantCard;