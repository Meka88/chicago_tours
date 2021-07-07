import React, { useState } from 'react';
import './PageHeader.css';
import { NavLink } from 'react-router-dom'
import RandomPlace from '../RandomPlace/RandomPlace'

function PageHeader() {
    return (
        <div className="PageHeader">
            <header>
            <h1>CHICAGOTOUR</h1>
            <div className="PageHeader-Subtitle">Best places to see in Chicago</div>

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
                <RandomPlace />
            </div>
            </header>
        </div>
    )
}

export default PageHeader