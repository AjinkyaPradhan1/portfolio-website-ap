import "./home.css";
import "./contact.css";
import Navbar from "./Navbar";

function Contact() {
    return (
      <div className="cMain">
        
        {/* Navbar content and heading */}
        <div className="navbar">
          <div className="navbar_text">AP</div>
          <div className="navbar_content"><Navbar/></div>
        </div>
        <div className="contact_content">
          <div className="contact_content_left">
            <div className="ig1">
              <img class="image__img" src="./images/ig.jpg" alt="Bricks"/>
              <div class="image__overlay image__overlay--primary">
                <div class="image__title"><a href="https://www.instagram.com/ajinkyapp_1/">Link</a></div>
                
              </div>
            </div>
            <div className="ig1">
              <img class="image__img" src="./images/linkedin.png" alt="Bricks"/>
              <div class="image__overlay image__overlay--primary">
                <div class="image__title"><a href="https://www.linkedin.com/in/ajinkya-pradhan-1a141b229/">Link</a></div>
              </div>
            </div>
            <div className="ig1">
              <img class="image__img" src="./images/github.png" alt="Bricks"/>
              <div class="image__overlay image__overlay--primary">
                <div class="image__title"><a href="https://github.com/AjinkyaPradhan1">Link</a></div>
              </div>
            </div>
          </div>
          <div className="contact_content_right">
            <div className="ig"></div>
            <div className="ig"></div>
            <div className="ig"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;