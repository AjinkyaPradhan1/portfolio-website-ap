import './navbar.css';

function Navbar(){
    return(
        <div className="navbarMain">
            <div class="topnav">
                <a class="active" href="/">Home</a>
                <a href='/skills'>Skills</a>
                <a href='/qual'>Qualification</a>
                <a href='/projects'>Projects</a>
                <a href='/contact'>Contact</a>
                <a href='#test'>Test</a>
            </div>
        </div>
    );
}

export default Navbar;