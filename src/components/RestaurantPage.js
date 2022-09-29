// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import RestaurantList from "./RestaurantList";
import NewRestaurantForm from "./NewRestaurantForm";


function RestaurantPage() {
   const [allRestaurants, setAllRestaurants] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/restaurants')
      .then((response) => response.json())
      .then((data) => setAllRestaurants(data));
  }, [])
  

  return (
    <main>
      <RestaurantList allRestaurants={allRestaurants} setAllRestaurants={setAllRestaurants}/>
      <NewRestaurantForm />
      {/* <Search />
      <Filter /> */}
    </main>
  );
}

export default RestaurantPage;
