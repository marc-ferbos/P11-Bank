import React from "react";
import argentBankLogo from "./../../src/argentBankLogo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            <div>
                <NavLink to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
            
            <div>
                <a class="main-nav-item" href="./user.html">
                    <i class="fa fa-user-circle"></i>
                    Tony
                </a>
                <a class="main-nav-item" href="./index.html">
                    <i class="fa fa-sign-out"></i>
                    Sign Out
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
