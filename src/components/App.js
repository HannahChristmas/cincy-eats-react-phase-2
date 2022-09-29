// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home";
import RestaurantList from "./RestaurantList";
import NewRestaurantForm from "./NewRestaurantForm";


function App() {
  const [allRestaurants, setAllRestaurants] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/restaurants')
      .then((response) => response.json())
      .then((data) => setAllRestaurants(data));
  }, [])
  

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/restaurants">
          <RestaurantList allRestaurants={allRestaurants}/>
        </Route>
        <Route path="/add">
          <NewRestaurantForm />
        </Route>
      </Switch>
      {/* <header>
        <h1>Welcome</h1>
      </header> */}
    </div>
  );
}

export default App;
