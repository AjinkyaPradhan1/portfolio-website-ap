import "./about.css";
import Navbar from "./Navbar";

function About() {
    return (
      <div className="aMain">
        
        {/* Navbar content and heading */}
        <div className="navbar">
          <div className="navbar_text">AP</div>
          <div className="navbar_content"><Navbar/></div>
        </div>

        <div className="about_content">
          <div className="left">
            <img class="img_about" src="./images/img_mine.jpg" alt="img_mine"></img>
          </div>
          <div className="right">
          
          </div>
        </div>
        
      </div>
    );
  }
  
  export default About;