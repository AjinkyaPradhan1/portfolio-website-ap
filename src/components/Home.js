import "./home.css";
import Navbar from "./Navbar";

function Home() {
    return (
      <div className="hMain">

      {/* Navbar content and heading */}
        <div className="navbar">
          <div className="navbar_text">Ajinkya Pradhan</div>
          <div className="navbar_content"><Navbar/></div>
        </div>

      </div>
    );
  }
  
  export default Home;