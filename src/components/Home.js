import React from "react";
import red from '../red.jpeg'
import pastry from "../pastry.jpeg"
import egg from "../egg.jpeg"
import taco from "../taco.jpeg"
import pavlova from "../pavlova.jpeg"
import empanada from "../empanada.jpeg"



function Home() {

    return<div className="home-div">
        <h1>About Us</h1>
        <p>Love Cincinnati? So do we. Use this app as a food-passport to keep track of your favorite spots. One of your favorites isn't on the list? Go ahead and add it!</p>
        <img class="homeImages"src={red} alt={"red-egg-brunch"}/>
        <img class="homeImages"src={pastry} alt={"pastry"}/>
        <img class="homeImages"src={taco} alt={"taco"}/>
        <img class="homeImages"src={egg} alt={"green-egg-brunch"}/>
        <img class="homeImages"src={pavlova} alt={"pavlova"}/>
        <img class="homeImages"src={empanada} alt={"empanada"}/>

    </div>
}

export default Home;