import React, { useState } from "react";
import { Link } from "react-router-dom";

import '../css/style.css';

const Navbar = () => {
      let [activeLink, setActiveLink] = useState("/");

      const handleClick = (path) => {
        setActiveLink(path);
      };
    

    return(
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase">
            <div className="container-fluid">
              <h1 className="navbar-brand">John Doe</h1>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "/" ? "active fw-bold text-decoration-underline" : ""}`} onClick={() => handleClick("/")}  to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "/services" ? "active fw-bold text-decoration-underline" : ""}`} onClick={() => handleClick("/services")} to="/services">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "/portfolio" ? "active fw-bold text-decoration-underline" : ""}`} onClick={() => handleClick("/portfolio")} to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "/contact" ? "active fw-bold text-decoration-underline" : ""}`} onClick={() => handleClick("/contact")} to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "/mentions" ? "active fw-bold text-decoration-underline" : ""}`} onClick={() => handleClick("/mentions")} to="/mentions">Mentions légales</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </header>
    )
}

export default Navbar;