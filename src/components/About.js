import "./home.css";
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

        <div className="right">
            <div className="right_content">
                <div className="right_content1">
                  <img class="image_back" src="images/img_back.jpg" alt="back_img"></img>
                  <img class="image_mine" src="images/img_mine.png" alt="mine_img"></img>
                  
                </div>
            </div>
          </div>

      </div>
    );
  }
  
  export default About;