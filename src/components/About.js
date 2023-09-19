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
            <div className="about_me_desc_left">
              Believer of excellence, Enthusiastic Technophile, 
              Skilled in leadership and communication, having the zeal to up-skill,
              develop as well as diversify my professional
              skill-set. Seeking to use proven skills in leadership, debugging, and coding to meet business needs at Meed.
              </div>
          </div>

          <div className="right_about">
          <img class="right_img_about" src="./images/img_mine.jpg" alt="img_mine"></img>
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
                    
                    <div className="title_contents_nameHead">Name</div>
                    <div className="title_contents_name">Ajinkya Pradhan</div><br/>
                    
                    <div className="title_contents_cityHead">City</div>
                    <div className="title_contents_city">Indore</div><br/>
                    
                    <div className="title_contents_dobHead">Date of Birth</div>
                    <div className="title_contents_dob">August 25,2001</div><br/>

                    <div className="title_contents_caHead">Current Address</div>
                    <div className="title_contents_ca">Indore, India</div><br/>

                    <div className="title_contents_langHead">Languages Known</div>
                    <div className="title_contents_langKnown">English, Hindi, Marathi, Gujarati</div><br/>

                    <div className="title_contents_intHead">Interests</div>
                    <div className="title_contents_interest">Full Stack Development, Java Software Development , Web Development</div><br/>

                    <div className="title_contents_hobbHead">Hobbies:</div>
                    <div className="title_contents_hobbies">Learning languages, Football, Cricket, Painting, Reading Books</div>
                  </div>
                </div>
                <div className="details">
                  <div className="details_content">
                    <div className="details_content_nameCont">Ajinkya Pradhan</div><br/>
                    <div className="details_content_cityCont">Indore</div><br/>
                    <div className="details_content_dobCont">August 25,2001</div><br/>
                    <div className="details_content_caCont">Indore, India</div><br/>
                    <div className="details_content_langCont">English, Hindi, Marathi, Gujarati</div><br/>
                    <div className="details_content_intCont">Full Stack Development, Java Developer , Web Developer</div><br/>
                    <div className="details_content_hobbCont">Learning languages, Football, Cricket, Painting, Reading Books</div>
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