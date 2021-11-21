import React from 'react'
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="/">CodeHub</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav  mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink to="/" exact aria-current="page" className="nav-link" >Home</NavLink>
                                        </li>
                                        <li className="nav-item">

                                            <NavLink activeclassName="menu_active" to="/Service" className="nav-link" >Services</NavLink>

                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeclassName="menu_active" to="/Contact" className="nav-link">Contact Us</NavLink>

                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeclassName="menu_active" to="/About" className="nav-link">About Us</NavLink>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;