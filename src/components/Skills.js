import "./home.css";
import "./skills.css";
import Navbar from "./Navbar";

function Skills() {
    return (
      <div className="sMain">
        
        {/* Navbar content and heading */}
        <div className="navbar">
          <div className="navbar_text">AP</div>
          <div className="navbar_content"><Navbar/></div>
        </div>
        
        <h1>Skills</h1>
        

        <div className="skills_content">

          <div className="skills_content1">
            <div className="skills1">
              <div className="one"></div>
            </div>

            <div className="skills2">
              
            </div>
          </div>

          <div className="skills_content2">
            <div className="skills3">
              
            </div>
          </div>

        </div>

      </div>
    );
  }
  
  export default Skills;