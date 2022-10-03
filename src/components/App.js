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
      .then((data) => setAllRestaurants(data));
  }, [])

  function newRestaurantFormSubmitClick(newRestaurant){
    setAllRestaurants([...allRestaurants, newRestaurant])
  }

  // const sortByName = () => {
  //   return [...allRestaurants].sort((a, b) => {
  //     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  //     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }
    
  //     // names must be equal
  //     return 0;

  //   });

  // }


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
