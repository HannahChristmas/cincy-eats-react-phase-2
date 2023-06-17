import React, {useState} from "react";

function NewRestaurantForm({newRestaurantFormSubmitClick}){
const [name, setName] = useState('')
const [neighborhood, setNeighborhood] = useState('Select Neighborhood')
const [cuisine, setCuisine] = useState('Select Cusine')
const [website, setWebsite] = useState('')
const [menu, setMenu] = useState('')
const [instagram, setInstagram] = useState('')
const [visited, setVisited] = useState('')

function handleFormSubmit(e){
    e.preventDefault()
    // if visited is equal to the string "true", return true. Else, return false.
    const visitedBoolean = visited === 'true'

    const newRestaurantFromForm =   {
        "name": name,
        "neighborhood": neighborhood,
        "cuisine": cuisine,
        "instagram": instagram,
        "website": website,
        "menu": menu,
        "visited": visitedBoolean
      }
      
      fetch('http://localhost:3004/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRestaurantFromForm),
      })
        .then((response) => response.json())
        .then((data) => {
            newRestaurantFormSubmitClick(data);
      })
      alert("Thanks for adding a new restaurant! Check it out at Our Spots.")
      resetForm()
}

  const resetForm = () => {
    setName('')
    setNeighborhood('Select Neighborhood')
    setCuisine('Select Cuisine')
    setWebsite('')
    setMenu('')
    setInstagram('')
    setVisited('Have you visited?')
  }

    return(
        <div className="newRestaurantFormContainer">
        <h1>New Restaurant Form</h1>
        <h3>Add a new restaurant to the list!</h3>
            <form className="newForm" onSubmit={handleFormSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Restaurant name"
            className="input-text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <br />
            <select 
              onChange={(e) => setNeighborhood(e.target.value)}
              value={neighborhood}
              >
            < option value="Select Neighborhood">Select Neighborhood</option>
            < option value="CBD">CBD</option>
            < option value="Covington, KY">Covington, KY</option>
            < option value="East End">East End</option>
            < option value="East Walnut Hills">East Walnut Hills</option>
            < option value="Montgomery">Montgomery</option>
            < option value="OTR">OTR</option>
            < option value="Other">Other</option>
            </select>
            <br />
            <select 
              onChange={(e) => setCuisine(e.target.value)}
              value={cuisine}
              >
            < option value="Select Cusine">Select Cusine</option>
            < option value="American">American</option>
            < option value="Chinese">Chinese</option>
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
            onChange={(e) => setWebsite(e.target.value)}
            value={website}
            />
            <br />
            <input
            type="text"
            name="name"
            placeholder="Menu"
            className="input-text"
            onChange={(e) => setMenu(e.target.value)}
            value={menu}
            />
            <br />
            <input
            type="text"
            name="name"
            placeholder="Instagram"
            className="input-text"
            onChange={(e) => setInstagram(e.target.value)}
            value={instagram}
            />
            <br />
            <select 
              onChange={(e) => setVisited(e.target.value)}
              value={visited}
              >
            < option value="Have you visited?">Have you visited?</option>
            < option value={true}>Yes</option>
            < option value={false}>Not yet</option>
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