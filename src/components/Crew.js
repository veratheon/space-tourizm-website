import React from "react"

export default function Crew(props) {

    return(
        <div className="grid-container grid-container--crew">
            <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
            <div id="crew-nav" className="dot-indicators flex">
                <button onClick={() => props.setCrew(0)} className="active"><span className="sr-only">0</span></button>
                <button onClick={() => props.setCrew(1)} className=""><span className="sr-only">1</span></button>
                <button onClick={() => props.setCrew(2)} className=""><span className="sr-only">2</span></button>
                <button onClick={() => props.setCrew(3)} className=""><span className="sr-only">3</span></button>
            </div>
            <article className="crew-details">
                <h2 className="fs-600 ff-serif uppercase">{props.role}</h2>

                <p className="nameCrew fs-700 uppercase ff-serif">{props.name}</p>

                <p className="description-crew">{props.bio}</p>

            </article>
    
            <img src={props.img} alt="Douglas Hurley"></img>
        </div>
    )
}