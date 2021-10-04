import React from "react";
//Work page to export
const Work = () => {
  return (
    <div id="workPage">
        {/* Setting id for FlexBox to organize work history */}
        <div id="workBox">
            {/* header for work history box */}
        <h1 id="worked">Where I've Worked</h1>
        {/* Work history box with company name and time-frame worked there, will refactor without page breaks later */}
      <div id="workHistory">
        <h2>E.F. Nolan General Contractor</h2>
        Office Administrator, July 2016-May 2021
        <br></br>
        <br></br>
        <h2>Morgan Stanley Wealth Management</h2>
        Client Service Associate, September 2013-July 2016
        <br></br>
        <br></br>
        <h2>Gap Inc.</h2>
        Sales Associate, October 2014-July 2015
        <br></br>
        <br></br>
        <h2>Ticonderoga Federal Credit Union</h2>
        Intern, June 2013-August 2013
      </div>
      </div>
      {/* Container for the what i've learned section */}
      <div id="learn">
          {/* What i've learned header */}
        <h1 id="learned">What I've Learned</h1>
        {/* Unordered list of skills and software I've learned */}
        <div id="list">
        <ul>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Git</li>
          <li>Microsoft Office Suite</li>
          <li>Adobe Photoshop and Lightroom</li>
          <li>Customer Service</li>
          <li>Accounting</li>
          <li>General Contracting</li>
          <li>... and still learning</li>
        </ul>
        </div>
        {/* Container for my resume link setup */}
        <div id="resume">
            {/* Resumer link header */}
        <h3 id="resHead">Download My Resume</h3>
        {/* Image link to download a PDF of my resume */}
      <a href="./Assets/Matt_Nolan_Resume.pdf" download>
          <img src="./Images/Resume.png" alt="Matt Nolan Resume" id="resumeImg"/>
      </a>
      </div>
      </div>
      {/* Future goals section */}
      <div id="future">
          {/* Header and paragraph text of some career goals */}
          <h1 id="going">Where I'm Going</h1>
          <p id="goals">I hope to do work for companies I respect and am excited about which align with my values. I would ideally work as part of a small team and wear many hats (literally and figuratively... hats in the office is a must) Specific industries aren't a focus for me as I have lots of interests and passions that I am motivated by. Any company working to improve our small city of Burlington, VT would be a bonus.</p>
      </div>
    </div>
  );
};

export default Work;
