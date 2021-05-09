import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { navLinks } from './navData';

export default function Navbar() {
    return (
        <nav className="nav">
                <div className="nav-header">
                    <Link to="/"><h4>React Practice Projects</h4></Link>
                </div>
                <div className="links-container show-container">
                    <ul className="nav-links">
                        {navLinks.map((navLink, index) => (
                            <li>
                                <Link className="link" to={navLink.url}>{navLink.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
        </nav>
    )
}
