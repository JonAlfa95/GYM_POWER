import React from 'react';
import { NavLink } from 'react-router-dom'; 

export default function Navigation() {
    return (
        <div>
            <nav className="navbar-fixed black">
                <div className="container">
                    <div className="nav-wrapper">
                        <NavLink className="brand-logo hide-on-small-only" to="/">GYM POWER</NavLink>
                        <NavLink className="brand-logo hide-on-med-and-up" to="/"><h5>GYM POWER</h5></NavLink>
                            <a href="/" className="sidenav-trigger" data-target="menuresponsive">
                            <i className="material-icons">menu</i>
                            </a>
                            
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/Rutinas">Rutinas</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul className="sidenav" id="menuresponsive">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/Rutinas">Rutinas</NavLink></li>
            </ul>
        </div>
    )
}
