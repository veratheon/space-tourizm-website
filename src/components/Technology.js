import React from "react"

export default function Technology(props) {
    return(
        <div className="grid-container grid-container--technology flow">
            <h1 className="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>
            <div id="technology-nav" className="dot-indicators flex">
                <button onClick={() => props.setTechnology(0)} className="active"><span className="sr-only">0</span></button>
                <button onClick={() => props.setTechnology(1)} className=""><span className="sr-only">1</span></button>
                <button onClick={() => props.setTechnology(2)} className=""><span className="sr-only">2</span></button>

            </div>
            <article className="technology-details">

                <p className="theTechn uppercase ff-sans-cond letter-spacing-3 text-accent">The Technology...</p>

                <p className="nameTechn fs-700 uppercase ff-serif">{props.name}</p>

                <p className="text-accent">{props.bio}</p>

            </article>
    
            <img src={props.img} alt="Douglas Hurley"></img>
        </div>
    )
}