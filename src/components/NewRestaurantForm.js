import React, {useState} from "react";

function NewRestaurantForm(){
    return(
        <div>
        <h1>New Restaurant Form</h1>
        <h3>Add a new restaurant to the list!</h3>
            <form className="add-restaurant">
            <input
            type="text"
            name="name"
            placeholder="Restaurant name"
            className="input-text"
            />
            <br />
            <select>
            < option value="Select Neighborhood">Select Neighborhood</option>
            < option value="CBD">CBD</option>
            < option value="Covington, KY">Covington, KY</option>
            < option value="East End">East End</option>
            < option value="East Walnut Hills">East Walnut Hills</option>
            < option value="Montgomery">Montgomery</option>
            < option value="Other">Other</option>
            </select>
            <br />
            <select>
            < option value="Select Cusine">Select Cusine</option>
            < option value="American">American</option>
            < option value="Japanese">Japanese</option>
            < option value="Mediterranean">Mediterranean</option>
            < option value="Small Plates">Small Plates</option>
            < option value="Other">Other</option>
            </select>
            <br />
            <input
            type="text"
            name="name"
            placeholder="Website"
            className="input-text"
            />
            <br />
            <input
            type="text"
            name="name"
            placeholder="Menu"
            className="input-text"
            />
            <br />
            <input
            type="text"
            name="name"
            placeholder="Instagram"
            className="input-text"
            />
            <br />
            <select>
            < option value="Have you visited?">Have you visited?</option>
            < option value="Yes">Yes</option>
            < option value="Not yet">Not yet</option>
            </select>
            <br /><br />
            <input
            type="submit"
            name="submit"
            value="Add a Spot"
            className="submit"
            />
        </form>
        </div>
    )
}

export default NewRestaurantForm;