import { useRef } from "react";
import { useState } from "react";
import './Start.css'

export default function Start({setUsername,setSelectedOption}){
    const inputRef= useRef();
    

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        
    }

    const handleStartClick = () => {
        if(document.getElementsByName("age")!="")
        {
        setUsername(inputRef.current.value);
        }
    }
    return(
        <>

        <div className="start">
                <h1>Puzzle game</h1>
                <input placeholder="enter your name" className="startInput" ref={inputRef} />
                <input type="radio" id="age1" name="age" value="9" onChange={handleOptionChange} />
                <label htmlFor="age1">3-3</label><br />
                <input type="radio" id="age2" name="age" value="16" onChange={handleOptionChange} />
                <label htmlFor="age2">4-4</label><br />
                <input type="radio" id="age3" name="age" value="25" onChange={handleOptionChange} />
                <label htmlFor="age3">5-5</label><br />
                <button className="startButton" onClick={handleStartClick}>Start</button>
            </div>
        </>
    )
}