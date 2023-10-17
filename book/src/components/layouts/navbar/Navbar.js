import React from "react";
import './navbar.styles.css';
import { Link } from 'react-router-dom';

const Navbar=({ darkTheme})=>{
    
    return(
        <section className={darkTheme ? 'background-dark relative' + ' navbar-container' : 'background-transparent' + ' navbar-container'}>
            <div className="container flex justify-between align-center">
                <a href="a" className="logo">Book<span className="text-primary">Store</span></a>

                <nav className="nav-links-container">
                    <Link to="/" className="nav-links">Home</Link>
                    <Link to="/books" className="nav-links">Books</Link>
                    <Link to="/login" className="nav-links">Log In</Link>
                </nav>
            </div>
        </section>
    )
}

export default Navbar