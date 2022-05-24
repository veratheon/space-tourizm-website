import React from "react"

export default function Navigation(props) {
    return(
       <div className="home-header flex space-between">
                <img src="logo.svg" alt="space tourism logo" className="logo" />
                <button id ="nav-toggle" className="mobile-nav-toggle" aria-controls="primary-navigation" onClick={props.handleNavClose}><span 
                className="sr-only" aria-expanded="false">Menu</span></button>
                <nav id="nav">
                    <ul id="primary-navigation" className="navigation primary-navigation underline-indicators flex ff-sans-cond">
                        <li className="active"
                        onClick={() => props.navHandle("00HOME")}><button 
                        className="text-white uppercase letter-spacing-2"
                        ><span>00</span>Home</button></li>
                        <li onClick={() => props.navHandle("01DESTINATION")}><button 
                        className="text-white uppercase letter-spacing-2" 
                        ><span>01</span>Destination</button></li>
                        <li onClick={() => props.navHandle("02CREW")}><button 
                        className="text-white uppercase letter-spacing-2" 
                        ><span>02</span>Crew</button></li>
                        <li onClick={() => props.navHandle("03TECHNOLOGY")}><button 
                        className="text-white uppercase letter-spacing-2" 
                        ><span>03</span>Technology</button></li>
                    </ul>
                </nav>
            </div>
    )
}