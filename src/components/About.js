import "./about.css";
import "./home.css";
import Navbar from "./Navbar";
import Footer from "./Footer"

function About() {
    return (
      <div className="aMain">
        
        {/* Navbar content and heading */}
        <div className="navbar">
          <div className="navbar_text">AP</div>
          <div className="navbar_content"><Navbar/></div>
        </div>

        <div className="about_content">
          <div className="left_about">
            <img class="img_about" src="./images/img_mine.jpg" alt="img_mine"></img>
          </div>

          <div className="right_about">
              <div className="about_me_heading">About Me</div>
              <div className="about_me_desc">
              Believer of excellence, Enthusiastic Technophile, 
              Skilled in leadership and communication, having the zeal to up-skill,
              develop as well as diversify my professional
              skill-set. Seeking to use proven skills in leadership, debugging, and coding to meet business needs at Meed.
              </div>

              <div className="key_value">
                <div className="title">
                  <div className="title_contents">
                    Name: <br></br>
                    City:<br></br>
                    Date of Birth:<br></br>
                    Current Address:<br></br>
                    Languages Known:<br></br>
                    Interests:<br></br>
                    Hobbies:<br></br>
                  </div>
                </div>
                <div className="details">
                  <div className="details_content">
                    Ajinkya Pradhan <br></br>
                    Indore<br></br>
                    August 25,2001<br></br>
                    Pune, India<br></br>
                    English, Hindi, Marathi, Gujarati<br></br>
                    Full Stack Development (FrontEnd+BackEnd)<br></br>
                    Learning languages, Football, Cricket, Painting, Reading Books
                  </div>
                </div>

                {/*  */}
              </div>

              
              
          </div>
          
        </div>

        <div className="footer_about">
              <Footer/>
              </div>
        
      </div>
    );
  }
  
  export default About;