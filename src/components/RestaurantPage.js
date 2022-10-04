import React, { useState } from "react";
// import RestaurantList from "./RestaurantList";
import FilterBar from "./FilterBar";
import RestaurantCard from "./RestaurantCard";

function RestaurantPage({allRestaurants, setAllRestaurants}) {
   const [filterNeighborhood, setFilterNeighborhood] = useState("Neighborhood")
   const [filterCuisine, setFilterCuisine] = useState("Cuisine")
   const [filterVisited, setFilterVisited] = useState("Have you visited?")
   const [search, setSearch] = useState("")

  function handleNeighborhoodFilter(e){
    setFilterNeighborhood(e.target.value)
  }

  function handleCuisineFilter(e){
    setFilterCuisine(e.target.value)
  }

  function handleVisitedFilter(e){
    setFilterVisited(e.target.value)
  }

  const restaurantSearchList = allRestaurants.filter(restaurant => {
    return (
      restaurant.name.toLowerCase().includes((search).toLowerCase())
    )
  })

  const filteredByAllCriteria = restaurantSearchList.filter(restaurant => {
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

  return (
    <main>
       <h1>All of Our Restaurants</h1>
      <FilterBar handleNeighborhoodFilter={handleNeighborhoodFilter} handleCuisineFilter={handleCuisineFilter} handleVisitedFilter={handleVisitedFilter} setSearch={setSearch}/>  
      {/* <RestaurantList filterNeighborhood={filterNeighborhood} filterCuisine={filterCuisine} filterVisited={filterVisited} allRestaurants={restaurantSearchList} setAllRestaurants={setAllRestaurants}/> */}
      <div>
      {restaurantsOnInitialRender}
      </div>
    </main>
  );
}


export default RestaurantPage;
