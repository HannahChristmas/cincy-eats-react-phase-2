import React from "react";
import red from '../Photos/red.jpeg'
import pastry from "../Photos/pastry.jpeg"
import egg from "../Photos/egg.jpeg"
import taco from "../Photos/taco.jpeg"
import pavlova from "../Photos/pavlova.jpeg"
import empanada from "../Photos/empanada.jpeg"

function Home() {

    return<div className="home-div">
        <h1>About Us</h1>
        <p>Love Cincinnati? So do we. Use this app as a food-passport to keep track of your favorite spots. One of your favorites isn't on the list? Go ahead and add it!</p>
        <img className="homeImages"src={red} alt={"red-egg-brunch"}/>
        <img className="homeImages"src={pastry} alt={"pastry"}/>
        <img className="homeImages"src={taco} alt={"taco"}/>
        <img className="homeImages"src={egg} alt={"green-egg-brunch"}/>
        <img className="homeImages"src={pavlova} alt={"pavlova"}/>
        <img className="homeImages"src={empanada} alt={"empanada"}/>

    </div>
}

export default Home;