import React from "react";

function SearchBar(){

    

    return (
        <div>
        <strong>Filter By: </strong>
        <select>
            <option value="Neighborhood">Neighborhood</option>
            <option value="CBD">CBD</option>
            <option value="Covington, KY">Covington, KY</option>
            <option value="East End">East End</option>
            <option value="East Walnut Hills">East Walnut Hills</option>
            <option value="Montgomery">Montgomery</option>
        </select>
        <select>
            <option value="Cusine">Cuisine</option>
            <option value="American">American</option>
            <option value="Japanese">Japanese</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Small Plates">Small Plates</option>
        </select><br></br><br></br>
        <strong>Sort by:</strong>
        <label>
            <input
                type="radio"
                value="Visited"
                name="sort"
                // checked=""
            />
            Visited
        </label>
        <label>
            <input
                type="radio"
                value="It's Still on the List!"
                name="sort"
                // checked=""
            />
            It's Still on the List!
        </label>
        </div>
    )
}

export default SearchBar;