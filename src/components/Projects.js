import "./home.css";
import "./projects.css";
import Navbar from "./Navbar";

function Projects() {
    return (
      <div className="pMain">
        
        {/* Navbar content and heading */}
        <div className="navbar">
          <div className="navbar_text">AP</div>
          <div className="navbar_content"><Navbar/></div>
        </div>

        <div className="projects_content">
          <div className="p_content_1"></div>
          <div className="p_content_2"></div>
          <div className="p_content_3"></div>
        </div>

      </div>
    );
  }
  
  export default Projects;