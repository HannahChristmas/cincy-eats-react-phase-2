import React, { useState } from "react";

function Challenge(){

    const [count, setCount] = useState(0)
    const [inputText, setInputText] = useState('')

    function handleChange(e){
        setInputText(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log("Button was clicked")
        setInputText("")
        setCount(inputText.length + count) 
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input
            type="text"
            placeholder="Type in here..."
            onChange={handleChange}
            value={inputText}
            />
            <button>Click Me!</button>
            <p>{count}</p>
        </form>
    
        // Create a form with text input done
        // Create a button inside of the form "Click Me!" done
        // a <p> counter starting at 0 done
        // declare state for counter, setCounter (0) done
        // declare state for inputText done
        // function setInputText to e.target.value done 
        // function for onSubmit: preventDefault() set input value (?)
        // textInput.length?

        // What do I have? (states accessible, event on submit, how do I increment the count?)

        // I have count and inputText.

        // What do I need to do? 
    )
}

export default Challenge;


// -Add a controlled form that includes:
//      A text input
//      A button with the text of “Click Me!”
//      A paragraph that has a counter that starts at 0
// -When the user inputs text in the text field and submit it, the text input should reset. At the same time the counter should increment based on the word length
// -The counter will continue to increment based on word length and will never reset back to zero. So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.