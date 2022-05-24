import React from "react";
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Destination from "./components/Destinations"
import Crew from "./components/Crew"
import Technology from "./components/Technology"
import data from "./data.json"


export default function App(){
  const [openCloseMenu, setOpenCloseMenu] = React.useState(true)
  const [navigation, setNavigation] = React.useState("home")

  const [choosenPlanet, setChoosenPlanet] = React.useState("Moon")
  const [dataDestination, setDataDestination] = React.useState(getDataDestination("Moon"))

  const [choosenCrew, setChoosenCrew] = React.useState(0)
  const [dataCrew, setDataCrew] = React.useState(getDataCrew(0))

  const [choosenTechnology, setChoosenTechnology] = React.useState(0)
  const [dataTechnology, setDataTechnology] = React.useState(getDataTechnology(0))


  document.addEventListener('keydown', function(e) {
    console.log(e.code)
});


    function handleNavClose() {
      if(openCloseMenu) {
          document.getElementById("nav").classList.add("sr-only")
          document.getElementById("nav-toggle").classList.add("burger-menu") 
      } else {
          document.getElementById("nav").classList.remove("sr-only")
          document.getElementById("nav-toggle").classList.remove("burger-menu");
      }
      setOpenCloseMenu(old => !old)
  }

  function handleNavigation(page) {
    const pageName = page.toLowerCase().slice(2)
    const nav = document.querySelectorAll("ul.primary-navigation li")

    setNavigation(old => pageName)
    document.getElementById("main").classList = "main " + pageName
    
    for (let elem of nav) {

      if (elem.innerText === page) {
        elem.classList.add("active")
      } else {
        elem.classList.remove("active")
      }

    }
    
  }

  function getDataDestination(choosenPlanet) {
    let info = {}
    for (let planet of data.destinations) {
      if (planet.name === choosenPlanet) {
        info = {name: planet.name,
                img: planet.images.png, 
                description: planet.description,  
                distance: planet.distance, 
                time: planet.travel}
      }
    }
    return info
  }

  React.useEffect(() => {
    setDataDestination(old => getDataDestination(choosenPlanet))
    const planets = document.querySelectorAll("#destination-nav button")

    for (let planet of planets) {

      if (planet.innerText === choosenPlanet.toUpperCase()) {
        planet.classList.add("active")
      } else {
        planet.classList.remove("active")
      }

    }

  }, [choosenPlanet])

  function getDataCrew(choosenCrew) {
    let info = {}
    const crew = data.crew[choosenCrew]
    console.log(crew)
        info = {name: crew.name,
                img: crew.images.png, 
                role: crew.role,  
                bio: crew.bio}
    return info
  }

  React.useEffect(() => {
    setDataCrew(old => getDataCrew(choosenCrew))
    const crews = document.querySelectorAll("#crew-nav button")

    for (let crew of crews) {

      if (crew.innerText == choosenCrew.toString()) {
        crew.classList.add("active")
      } else {
        crew.classList.remove("active")
      }

    }
  }, [choosenCrew])

  
  function getDataTechnology(choosenTechnology) {
    let info = {}
    const technology = data.technology[choosenTechnology]
        info = {name: technology.name,
                img: technology.images.landscape,   
                bio: technology.description}
    return info
  }

  React.useEffect(() => {
    setDataTechnology(old => getDataTechnology(choosenTechnology))
    const technologis = document.querySelectorAll("#technology-nav button")

    for (let techn of technologis) {

      if (techn.innerText == choosenTechnology.toString()) {
        techn.classList.add("active")
      } else {
        techn.classList.remove("active")
      }

    }
  }, [choosenTechnology])


    
  return(
    <div id = "main" className="main home">
      <Navigation handleNavClose={handleNavClose} navHandle={handleNavigation}/>
      {navigation === "home" && <Home />}
      {navigation === "destination" && 
      <Destination 
      setPlanet={setChoosenPlanet} 
      name={dataDestination.name}
      description={dataDestination.description}
      img={dataDestination.img}
      distance={dataDestination.distance}
      time={dataDestination.time}/>}
      {navigation === "crew" && <Crew 
      setCrew={setChoosenCrew}
      name={dataCrew.name}
      img={dataCrew.img}
      role={dataCrew.role}
      bio={dataCrew.bio}
      />}
      {navigation === "technology" && <Technology 
      setTechnology={setChoosenTechnology}
      name={dataTechnology.name}
      img={dataTechnology.img}
      bio={dataTechnology.bio}/>}
    </div>
  )
}