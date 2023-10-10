import "./Main.css"

import Skills from "../Skills";
import Work from "../WorkExperience";
import Education from "../Education";
import Projects from "../Projects";

function Main(){
    return (
        <div className="main-container">
            <Skills/>
            <Education/>
            <Work/>
            <Projects/>
        </div>
    )
}

export default Main;