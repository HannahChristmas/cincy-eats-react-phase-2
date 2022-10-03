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
        <p>Love Cincinnati? So do we. Use this app as a food-passport and keep track of your favorite spots. One of your favorites isn't on the list? Go ahead and add it!</p>
        {/* <img src="https://img.theculturetrip.com/768x/smart/wp-content/uploads/2018/03/2007325.jpg"/> */}
        <img class="homeImages"src={red}/>
        <img class="homeImages"src={pastry}/>
        <img class="homeImages"src={taco}/>
        <img class="homeImages"src={egg}/>
        <img class="homeImages"src={pavlova}/>
        <img class="homeImages"src={empanada}/>

    </div>
}

export default Home;