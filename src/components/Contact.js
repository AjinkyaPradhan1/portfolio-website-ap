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

      </div>
    );
  }
  
  export default Contact;