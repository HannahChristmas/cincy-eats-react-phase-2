import React from "react";

function SearchBar({handleNeighborhoodFilter, handleCuisineFilter, handleVisitedFilter}){
    return (
        <div>
        <strong>Filter By: </strong>
        <select className={"dropdown-filter"} onChange={handleNeighborhoodFilter}>
            <option value="Neighborhood">Neighborhood</option>
            <option value="CBD">CBD</option>
            <option value="Covington, KY">Covington, KY</option>
            <option value="East End">East End</option>
            <option value="East Walnut Hills">East Walnut Hills</option>
            <option value="Montgomery">Montgomery</option>
        </select>
        <select className={"dropdown-filter"} onChange={handleCuisineFilter}>
            <option value="Cuisine">Cuisine</option>
            <option value="American">American</option>
            <option value="Chinese">Chinese</option>        
            <option value="Japanese">Japanese</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Small Plates">Small Plates</option>
        </select>
        <select className={"dropdown-filter"} onChange={handleVisitedFilter}>
            <option value="Have you visited?">Have you visited?</option>
            <option value={true}>Yes!</option>
            <option value={false}>It's still on the list!</option>
        </select><br></br><br></br>
        </div>
    )
}

export default SearchBar;