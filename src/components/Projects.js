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

        <div className="projects_heading">My Projects</div>
        
        <div className="projects_content">
          <div className="p_content_1">
              <div className="p_content_1_image"></div>
              <div className="p_content_1_details">QuizMania React App</div>
                
          </div>
          
          <div className="p_content_2">
              <div className="p_content_1_image"></div>
              <div className="p_content_1_details">Calculator React App</div>
          </div>

          <div className="p_content_3">
              <div className="p_content_1_image"></div>
              <div className="p_content_1_details">WriteBuddy</div>
          </div>

          <div className="p_content_4">
              <div className="p_content_1_image"></div>
              <div className="p_content_1_details">Scientific Calculatrix</div>
          </div>

          <div className="p_content_5">
              <div className="p_content_1_image"></div>
              <div className="p_content_1_details">Learning Hub Django App</div>
          </div>

          <div className="p_content_6">
              <div className="p_content_1_image"></div>
              <div className="p_content_1_details">Art Gallery Django App</div>
          </div>

          <div className="p_content_7">
              <div className="p_content_1_image"></div>
              <div className="p_content_1_details">TIMEE</div>
          </div>

          <div className="p_content_8">
              <div className="p_content_1_image"></div>
              <div className="p_content_1_details">Disease Prediction System</div>
          </div>

          <div className="p_content_9">
              <div className="p_content_1_image"></div>
              <div className="p_content_1_details">E-Farming Store</div>
          </div>
        </div>

        <div className="footer"></div>

      </div>
    );
  }
  
  export default Projects;