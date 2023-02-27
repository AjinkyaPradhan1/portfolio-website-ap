import "./home.css";
import "./contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
            <div className="ic1">
              <img class="image__img" src="./images/ig.jpg" alt="Bricks"/>
              <div class="image__overlay1 image__overlay1--primary">
                <div class="image__title"><a href="https://www.instagram.com/ajinkyapp_1/">Link</a></div>
                
              </div>
            </div>
            <div className="ic2">
              <img class="image__img" src="./images/linkedin.png" alt="Bricks"/>
              <div class="image__overlay1 image__overlay1--primary">
                <div class="image__title"><a href="https://www.linkedin.com/in/ajinkya-pradhan-1a141b229/">Link</a></div>
              </div>
            </div>
            <div className="ic3">
              <img class="image__img" src="./images/github.png" alt="Bricks"/>
              <div class="image__overlay1 image__overlay1--primary">
                <div class="image__title"><a href="https://github.com/AjinkyaPradhan1">Link</a></div>
              </div>
            </div>
          </div>
          <div className="contact_content_right">
            <div className="ic4">
              <img class="image__img" src="./images/gmail.png" alt="Bricks"/>
              <div class="image__overlay1 image__overlay1--primary">
                <div class="image__title">Email</div>
                <p class="image__description">
                ajinkyappradhan@gmail.com
			          </p>

              </div>
            </div>
            <div className="ic5">
              <img class="image__img" src="./images/phone.png" alt="Bricks"/>
              <div class="image__overlay1 image__overlay1--primary">
              <div class="image__title">Mobile No.</div>
                <p class="image__description">
                9425451952
			          </p>
              </div>
            </div>
            
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
  
  export default Contact;