import React from "react";
import './navbar.styles.css';


const Navbar=({ darkTheme})=>{
    
    return(
        <section className={darkTheme ? 'background-dark relative' + ' navbar-container' : 'background-transparent' + ' navbar-container'}>
            <div className="container flex justify-between align-center">
                <a href="a" className="logo">Book<span className="text-primary">Store</span></a>

                <nav className="nav-links-container">
                    <a href="a" className="nav-links">Home</a>
                    <a href="a" className="nav-links">Books</a>
                    <a href="a" className="nav-links">Log In</a>
                </nav>
            </div>
        </section>
    )
}

export default Navbar