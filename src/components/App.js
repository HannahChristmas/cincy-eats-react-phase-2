// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home";
import RestaurantList from "./RestaurantList";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantPage from "./RestaurantPage"


function App() {
  const [allRestaurants, setAllRestaurants] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/restaurants')
      .then((response) => response.json())
      .then((data) => setAllRestaurants(data));
  }, [])

  function newRestaurantFormSubmitClick(newRestaurant){
    setAllRestaurants([...allRestaurants, newRestaurant])
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/restaurants">
          <RestaurantPage allRestaurants={allRestaurants} setAllRestaurants={setAllRestaurants}/>
        </Route>
        <Route path="/add">
          <NewRestaurantForm newRestaurantFormSubmitClick={newRestaurantFormSubmitClick}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
