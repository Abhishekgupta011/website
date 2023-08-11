import React from "react";
import "./NavBar.css";
import Login from "./Login";

const NavBar =(props) =>{
    return(
        <div className="navbar-container">
            <ul className="navbar-list">
                <li className="home">Home</li>
                <li className="navbar-text">About</li>
                <li className="navbar-text">Menu</li>
                <li className="navbar-text">Contact Us</li>
                <Login />
            </ul>
        </div>
    )
}


export default NavBar;