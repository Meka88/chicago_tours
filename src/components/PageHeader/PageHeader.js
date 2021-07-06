import React from 'react';
import './PageHeader.css';
import { NavLink } from 'react-router-dom'

function PageHeader() {
    return (
        <div className="PageHeader">
            <header>
            <h1>CHICAGOTOUR</h1>
            <div className="PageHeader-Subtitle">Best places to see in Chicago</div>

            <div>
            <form className="button-search">
                <input
                    // value={query}
                    // placeholder="search"
                    // onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
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

export default PageHeader