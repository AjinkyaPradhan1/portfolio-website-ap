import './navbar.css';


function Navbar(){
    

    return(
        <div className="navbarMain">
            <div class="topnav">
                    <a class="active" href="/">Home</a>
                    <a href='/about'>About</a>
                    <a href='/skills'>Skills</a>
                    <a href='/projects'>Projects</a>
                    <a href='/contact'>Contact</a>
                    {/* <div id="mobile">
                        <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
                        </i>
                    </div> */}
            </div>
        </div>
        
    );
}

export default Navbar;