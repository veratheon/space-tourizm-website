import React from "react"

export default function Home() {
    return(
        <div className="grid-container grid-container--home">
            <div className="home-description">
                <h3 className="text-accent ff-sans-cond letter-spacing-1 fs-500 uppercase">So, you want to travel to</h3>
                <h1 className="uppercase ff-serif fs-900">Space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="align-end">
                <a href="#" className="large-button uppercase ff-serif text-dark bg-white">Explore</a>
            </div>
        </div>
    )
}