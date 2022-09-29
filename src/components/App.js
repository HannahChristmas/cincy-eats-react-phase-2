// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route></Route>
      </Switch>
      <header>
        <h1>Welcome</h1>
      </header>
    </div>
  );
}

export default App;
