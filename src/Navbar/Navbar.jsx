import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { navLinks } from './navData';

export default function Navbar() {
    return (
        <nav>
                <div className="nav-header">
                    <h4>React Practice Projects</h4>
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
