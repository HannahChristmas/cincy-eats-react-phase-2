// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import NewRestaurantForm from "./NewRestaurantForm";
import SearchBar from "./SearchBar";


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

  return (
    <main>
       <h1>All of Our Restaurants</h1>
      <SearchBar handleNeighborhoodFilter={handleNeighborhoodFilter} handleCuisineFilter={handleCuisineFilter} handleVisitedFilter={handleVisitedFilter} setSearch={setSearch}/>  
      <RestaurantList filterNeighborhood={filterNeighborhood} filterCuisine={filterCuisine} filterVisited={filterVisited} allRestaurants={restaurantSearchList} setAllRestaurants={setAllRestaurants}/>
      
      {/* <Search />
      <Filter /> */}
    </main>
  );
}

export default RestaurantPage;
