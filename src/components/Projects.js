import "./home.css";
import "./projects.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
              <div className="p_content_1_image">
                  <img class="image__img" src="./images/quizmaina.png" alt="QuizMania"/>
                  <div class="image__overlay image__overlay--primary">
                    <div class="image__title">
                      <button className="qmania"><a href="http://quizmaniawapp.netlify.app">Live Project</a></button>
                      <button className="sCode"><a href="https://github.com/AjinkyaPradhan1/QuizMania">Source Code</a></button>
                    </div>
                    
                  </div>
              </div>
              <div className="p_content_1_details">QuizMania React App</div>
                
          </div>
          
          <div className="p_content_2">
              <div className="p_content_1_image">
                <img class="image__img" src="./images/todo.png" alt="toDo"/>
                  <div class="image__overlay image__overlay--primary">
                    <div class="image__title">
          
                      <button className="project"><a href="https://github.com/AjinkyaPradhan1/ToDo-Full-Stack-App">Source Code</a></button>
                    </div>
                    
                  </div>
                  
              </div>
              <div className="p_content_1_details">Full Stack ToDo</div>
          </div>

          <div className="p_content_3">
                    <div className="p_content_1_image">
                      <img class="image__img" src="./images/writebuddy.jpg" alt="writeBuddy"/>
                      <div class="image__overlay image__overlay--primary">
                      <div class="image__title">
                        <button className="project"><a href="https://play.google.com/store/apps/details?id=com.eduapp.writebuddy">Live Project</a></button>
                        
                      </div>
                    
                  </div>
              </div>
              <div className="p_content_1_details">WriteBuddy</div>
          </div>

          <div className="p_content_4">
              <div className="p_content_1_image">
                  <img class="image__img" src="./images/calcScient.jpg" alt="Scientific Calculatrix"/>
                      <div class="image__overlay image__overlay--primary">
                      <div class="image__title">
                        <button className="project"><a href="https://play.google.com/store/apps/details?id=com.mathsapp.scientificcalculatrix">Live Project</a></button>
                        
                      </div>
                    
                  </div>
              </div>
              <div className="p_content_1_details">Scientific Calculatrix</div>
          </div>

          <div className="p_content_5">
              <div className="p_content_1_image">
                  <img class="image__img" src="./images/learning.jpg" alt="Learning Hub"/>
                      <div class="image__overlay image__overlay--primary">
                      <div class="image__title">
          
                        <button className="project"><a href="https://github.com/AjinkyaPradhan1/Learning-Hub">Source Code</a></button>
                      </div>
                    
                  </div>
              </div>
              <div className="p_content_1_details">Learning Hub Django App</div>
          </div>

          <div className="p_content_6">
              <div className="p_content_1_image">

              <img class="image__img" src="./images/art.jpg" alt="Art Gallery"/>
                      <div class="image__overlay image__overlay--primary">
                      <div class="image__title">
                        
                        <button className="project"><a href="https://github.com/AjinkyaPradhan1/ArtAuction">Source Code</a></button>
                      </div>
                    
                  </div>
              </div>
              <div className="p_content_1_details">Art Gallery Django App</div>
          </div>

          <div className="p_content_7">
                <div className="p_content_1_image">

                      <img class="image__img" src="./images/calc.png" alt="React Calculator"/>
                      <div class="image__overlay image__overlay--primary">
                        <div class="image__title">
                          
                          <button className="calcButton"><a href="https://simplecalculatrix.netlify.app">Live Project</a></button>
                          <button className="sCode"><a href="https://github.com/AjinkyaPradhan1/Calculator">Source Code</a></button>
                        </div>
                    
                      </div>
                </div>
              <div className="p_content_1_details">React Calculator App</div>
          </div>

          <div className="p_content_8">
          {/* New Added Here Starts */}
              <div className="p_content_2_image">
                        <button className="github"><a href="https://github.com/AjinkyaPradhan1/">Github</a></button><br></br>
                        <button className="gconsole"><a href="https://play.google.com/store/apps/developer?id=AJINKYA+PRADHAN">Google Play Console</a></button>
              </div>
              <div className="p_content_1_details">More Projects
              <img src="./images/arrow2.png" class="arrow" alt="arrow"></img></div>
              {/* New Added Here Ends */}
          </div>

          <div className="p_content_9">
              <div className="p_content_2_image"></div>
              <div className="p_content_1_details"></div>
          </div>
        </div>
        

        <div className="footer_project">
          <Footer/>
        </div>
      </div>
    );
  }
  
  export default Projects;