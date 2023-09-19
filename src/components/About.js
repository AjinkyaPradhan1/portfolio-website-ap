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
                    Name: <div className="title_contents_name">Ajinkya Pradhan</div><br></br>
                    City: <div className="title_contents_city">Indore</div><br></br>
                    Date of Birth:<div className="title_contents_dob">August 25,2001</div><br></br>
                    Current Address:<div className="title_contents_ca">Indore, India</div><br></br>
                    Languages Known:<div className="title_contents_langKnown">English, Hindi, Marathi, Gujarati</div><br></br>
                    Interests:<div className="title_contents_interest">Full Stack Development, Java Developer , Web Developer</div><br></br>
                    Hobbies:<div className="title_contents_hobbies">Learning languages, Football, Cricket, Painting, Reading Books</div><br></br>
                  </div>
                </div>
                <div className="details">
                  <div className="details_content">
                    Ajinkya Pradhan <br></br>
                    Indore<br></br>
                    August 25,2001<br></br>
                    Indore, India<br></br>
                    English, Hindi, Marathi, Gujarati<br></br>
                    Full Stack Development, Java Developer , Web Developer<br></br>
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