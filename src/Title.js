import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
    return (
        <div className="Title">
            <header>
            <h1>CHICAGOTOUR</h1>
            <div className="Title-Subtitle">Best places to see in Chicago</div>

            <div>
                <NavLink 
                className="nav-link"
                activeClassName="nav-link-active"
                exact 
                to="/">List</NavLink>
                <NavLink className="nav-link"
                activeClassName="nav-link-active"
                exact 
                to="/about">About</NavLink>
            </div>
            </header>
        </div>
    )
}

export default Title