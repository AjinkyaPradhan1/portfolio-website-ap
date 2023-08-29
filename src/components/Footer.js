import React from "react";
import "./footer.css"

function Footer(){
    return(
        <div className="fMain">
            <div className="footer_content">
                <div className="topic1">&copy;All Rights Reserved&#8482; {new Date().getFullYear()}-{new Date().getFullYear()+1}</div>
                <div className="topic2">Developed, Designed with &#10084; By: Ajinkya Pradhan</div>
            </div>
        </div>
    );
}

export default Footer;

