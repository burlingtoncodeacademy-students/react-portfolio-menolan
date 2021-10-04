import React from "react";
//Home page to be exported
const Home = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <img id="profPic" src="./Images/Profile_Pic.jpg" alt="Matt Nolan" />
      <div id="profBox">
        <div id="blurb">
          Aspiring developer hoping to create applications that solve unique
          problems
        </div>
        <div id="currentLoc">
          Currently located in beautiful Burlington, Vermont
          
        </div>
      </div>
      <img src="./Images/burly.jpeg" id="burly" alt="Burlington, VT" />
    </div>
  );
};

export default Home;
