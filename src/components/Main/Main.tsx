import "./Main.css"

import Skills from "../Skills";
import Work from "../WorkExperience";
import Education from "../Education";

function Main(){
    return (
        <div className="main-container">
            <Skills/>
            <Work/>
            <Education/>
        </div>
    )
}

export default Main;