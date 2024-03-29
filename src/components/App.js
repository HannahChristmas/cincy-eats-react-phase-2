import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantPage from "./RestaurantPage"

function App() {
  const [allRestaurants, setAllRestaurants] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/restaurants')
      .then((response) => response.json())
      .then((apiData) => {
        const sortedRestaraunts = sortByName(apiData)
        setAllRestaurants(sortedRestaraunts)
      });
  }, [])
  
  const sortByName = (apiData) => {
    return [...apiData].sort((a, b) => {
      const nameA = a.name.toUpperCase(); 
      const nameB = b.name.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  function newRestaurantFormSubmitClick(newRestaurant){
    setAllRestaurants([...allRestaurants, newRestaurant])
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/restaurants">
          <RestaurantPage allRestaurants={allRestaurants} setAllRestaurants={setAllRestaurants}/>
        </Route>
        <Route path="/add">
          <NewRestaurantForm newRestaurantFormSubmitClick={newRestaurantFormSubmitClick}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <h1>error 404: Nothing to eat here! Try another page.</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
