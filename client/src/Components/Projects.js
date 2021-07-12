import React from "react"
//Page of projects to export
const Projects = () => {
    return (
        <div>
            {/* Title for the page */}
            <h1 id="projectHeader">A few ongoing projects I'm working on, including this site!</h1>
            {/* Grid to contain and layout projects on the page for easier adding of more projects later */}
            <div id="projGrid">
                {/* Container for each project */}
                <div id="guess">
                    {/* Project title */}
                    <h2 class="projHead">Guess The Number</h2>
                    {/* Link to the projects Github repo */}
                <a href="https://github.com/burlingtoncodeacademy-students/guess-the-number-menolan">
                    {/* Thumbnail for the project */}
                    <img src="./Images/Guess.png" alt="Guess the Number" class="projImg" />
                </a>
                {/* Short description of the project */}
                <div class="projDesc">
                    Basic number guessing game played in the Command Terminal.
                </div>
                </div>
                {/* Formatting repeated from above project for all projects */}
                <div id="zork">
                    <h2 class="projHead">Zorkington</h2>
                <a href="https://github.com/burlingtoncodeacademy-students/zorkington-menolan">
                    <img src="./Images/Zork.png" alt="Zorkington" class="projImg" />
                </a>
                <div class="projDesc">
                    Text adventure game reminiscent of the OG Zork. Theme is based on The Legend of Zelda: Ocarina of Time
                </div>
                </div>
                <div id="tic">
                    <h2 class="projHead">Tic Tac Toe</h2>
                <a href="https://github.com/burlingtoncodeacademy-students/tic-tac-toe-menolan">
                    <img src="./Images/Tic.png" alt="Tic Tac Toe" class="projImg" />
                </a>
                <div class="projDesc">
                    Web based Tic-tac-toe game with a Sonic the Hedgehog theme
                </div>
                </div>
                <div id="portfolio">
                    <h2 class="projHead">React Portfolio</h2>
                <a href="https://github.com/burlingtoncodeacademy-students/react-portfolio-menolan">
                    <img src="./Images/Port.png" alt="React Portfolio" class="projImg" />
                </a>
                <div class="projDesc">
                    Personal portfolio built with React
                </div>
                </div>
            </div>
        </div>
    )
}

export default Projects