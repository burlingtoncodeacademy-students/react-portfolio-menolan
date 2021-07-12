import React from "react"
import { Link } from "react-router-dom"
//Nav bar to be exported
const Nav = () => {
    return (
      <div id="Nav">
        {/* Button link to home page */}
        <Link to="/" class="button"> 
        <button type="button">
        Home</button>
        </Link>
        {/* Button link to about page */}
        <Link to="/About" class="button">
          <button type="button">About</button>
        </Link>
        {/* Button link to hobbies page */}
        <Link to="/Hobbies" class="button">
          <button type="button">Hobbies</button>
        </Link>
        {/* Button link to work page */}
        <Link to="/Work" class="button">
          <button type="button">Work</button>
        </Link>
        {/* Button link to projects page */}
        <Link to="/Projects" class="button">
          <button type="button">Projects</button>
        </Link>
        {/* Button link to contact page, with id's for seperate styling */}
        <Link to="/Contact" id="contactLink">
          <button type="button" id="contactButt">Contact</button>
        </Link>
      </div>
    )
  } 

  export default Nav