import React from "react";
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navBar">
                <h1 className="pageTitle">SongSaver</h1>
                <NavLink className="navItem" to="/">Your Playlist</NavLink>
                <NavLink className="navItem" to="/About">About Me</NavLink>
            </nav>
        </div>
    );
}

export default Header;

