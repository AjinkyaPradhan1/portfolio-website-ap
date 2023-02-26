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
                
                
            </div>
        </div>
    );
}

export default Navbar;