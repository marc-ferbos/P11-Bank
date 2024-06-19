import React from "react";
import argentBankLogo from "./../../src/argentBankLogo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../Utils/authReducer";
import store from "../Utils/store";

function Navbar() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const username = useSelector((state) => state.auth.username);

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

            {isAuthenticated ? (
            <div>
                <NavLink to="/profile" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    {username}
                </NavLink>
                <NavLink onClick={() => {store.dispatch(logout())}} to="/" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign out
                </NavLink>
            </div>
            ) : (
            <div>
                <NavLink to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign in
                </NavLink>
            </div>
            )}
        </nav>
    );
}

export default Navbar;
