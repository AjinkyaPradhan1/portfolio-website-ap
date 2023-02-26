import "./home.css";
import Navbar from "./Navbar";

function Home() {
    return (
      <div className="hMain">

      {/* Navbar content and heading */}
        <div className="navbar">
          <div className="navbar_text">AP</div>
          <div className="navbar_content"><Navbar/></div>
        </div>

      {/*Body*/}
        <div className="home_content">
          <div className="left">

            <div className="left_content">
              <div className="left_content1">
                <div className="p0">Hi.......</div>
                <div className="p1">I'm, Ajinkya Pradhan</div>
              </div>
              <div className="left_content2">This is my Portfolio Website</div>

              
            </div>
            
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

      </div>
    );
  }
  
  export default Home;