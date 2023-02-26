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
        
        <h1>Technical Skills</h1>
        

        <div className="skills_content">

          <div className="skills_content1">
            <div className="skills1">


              <div className="skills1_heading">Front-End Development</div>
              <div className="skills1_content">
                
                <div className="skills1_content_row1">
                  <div className="row1_1">
                    <div className="one">
                        <img class="icons" src="./images/html5.png" alt="java"></img>
                    </div>
                    <div className="two">HTML5</div>
                    <div className="three">Advanced</div>
                  </div>

                  <div className="row1_2">
                    <div className="one">
                        <img class="icons" src="./images/css.png" alt="java"></img>
                    </div>
                    <div className="two">CSS</div>
                    <div className="three">Advanced</div>
                  </div>

                  <div className="row1_3">
                    <div className="one">
                        <img class="icons" src="./images/js.png" alt="java"></img>
                    </div>
                    <div className="two">Javascript</div>
                    <div className="three">Intermediate</div>
                  </div>

                </div>
                <div className="skills1_content_row2">
                    <div className="row1_1">
                      <div className="one">
                          <img class="icons" src="./images/react.jpg" alt="java"></img>
                      </div>
                      <div className="two">React JS</div>
                      <div className="three">Beginner</div>
                    </div>

                    <div className="row1_2">
                        <div className="one">
                            <img class="icons" src="./images/git.png" alt="java"></img>
                        </div>
                        <div className="two">Git</div>
                        <div className="three">Intermediate</div>
                    </div>
                    <div className="row1_3"></div>
                </div>
              </div>
              
            </div>

            <div className="skills2">
            <div className="skills1_heading">Software Development</div>
              <div className="skills1_content">
                
                <div className="skills1_content_row1">
                  <div className="row1_1">
                    <div className="one">
                        <img class="icons" src="./images/java.png" alt="java"></img>
                    </div>
                    <div className="two">Java</div>
                    <div className="three">Intermediate</div>
                  </div>

                  <div className="row1_2">
                    <div className="one">
                        <img class="icons" src="./images/cpp.png" alt="java"></img>
                    </div>
                    <div className="two">CPP</div>
                    <div className="three">Intermediate</div>
                  </div>

                  <div className="row1_3">
                    <div className="one">
                        <img class="icons" src="./images/python.jpg" alt="java"></img>
                    </div>
                    <div className="two">Python</div>
                    <div className="three">Beginner</div>
                  </div>

                </div>
                <div className="skills1_content_row2">
                    <div className="row1_1">
                      <div className="one">
                          <img class="icons" src="./images/sqlserver.jpg" alt="java"></img>
                      </div>
                      <div className="two">SQL Server</div>
                      <div className="three">Intermediate</div>
                    </div>

                    <div className="row1_2">
                        <div className="one">
                            <img class="icons" src="./images/django.webp" alt="java"></img>
                        </div>
                        <div className="two">Django</div>
                        <div className="three">Beginner</div>
                    </div>
                    <div className="row1_3"></div>
                </div>
              </div>
            </div>
            
          </div>

          <div className="skills_content2">
            
          </div>

        </div>

      </div>
    );
  }
  
  export default Skills;