// Importing React components, JS files for the individual pages and the persistent Nav and Footer
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from "./Components/About.js"
import Contact from "./Components/Contact.js"
import Hobbies from "./Components/Hobbies.js"
import Home from "./Components/Home.js"
import Projects from "./Components/Projects.js"
import Work from "./Components/Work.js"
import Nav from "./Components/Nav.js"
import Footer from "./Components/Footer.js"


// Error message for pages that don't exist
const NotFound = () => {
  return <div><h1>This page does not exist!</h1></div>
}
//Rendering components
const App = () => {
  return (
    // Setting container for whole site to allow for sticky footer
    <div class="Site">
      {/* BrowserRouter component for easy navigation */}
     <BrowserRouter>
     {/* Container for site content that pushes the footer to bottom */}
     <main class="Site-content">
       {/* Nav bar */}
       <Nav />
       {/* Switch and routes to change pages through links to other JS files */}
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/About" component={About} />
       <Route path="/Hobbies" component={Hobbies} />
       <Route path="/Projects" component={Projects} />
       <Route path="/Work" component={Work} />
       <Route path="/Contact" component={Contact} />
       <Route path="" component={NotFound} />
     </Switch>
     </main>
     {/* Footer that sticks to bottom of page */}
     <Footer />
     </BrowserRouter>
</div>
  )
  }

export default App;
