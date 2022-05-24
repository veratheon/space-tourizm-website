import React from "react"

export default function Destination(props) {

    return(
        <div className="grid-container grid-container--destination">
            
                <h1 className="text-accent ff-sans-cond letter-spacing-1 fs-500 uppercase numbered-title"><span>
                    01</span>Pick your destination</h1>
                <img src={props.img} alt="moon"></img>
            
                <div id="destination-nav" className="tab-list underline-indicators flex">
                    <button onClick={() => props.setPlanet("Mars")} className="uppercase ff-sans-cond text-accent letter-spacing-2">Mars</button>
                    <button onClick={() => props.setPlanet("Moon")} className="active uppercase ff-sans-cond text-accent letter-spacing-2">Moon</button>
                    <button onClick={() => props.setPlanet("Europa")} className="uppercase ff-sans-cond text-accent letter-spacing-2">Europa</button>
                    <button onClick={() => props.setPlanet("Titan")} className="uppercase ff-sans-cond text-accent letter-spacing-2">Titan</button>
                </div>

                <article className="destination-info">
                    <h2 className="uppercase ff-serif fs-800">{props.name}</h2>

                    <div className="description-destination">
                        <p>{props.description}</p>
                    </div>

                    <div className="destination-meta flex">
                        <div>
                            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                            <p className="ff-serif uppercase">{props.distance}</p>
                        </div>
                        <div>
                            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
                            <p className="ff-serif uppercase">{props.time}</p>
                        </div>
                    </div>

                </article>
            
        </div>
    )
}