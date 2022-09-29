// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home";
import RestaurantList from "./RestaurantList";
import NewRestaurantForm from "./NewRestaurantForm";


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/restaurants">
          <RestaurantList />
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
