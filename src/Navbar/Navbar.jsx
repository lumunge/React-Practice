import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h4>Logo Here</h4>
                    <button className="nav-toggle"><i class="fa fa-bars" aria-hidden="true"></i></button>
                </div>
                <div className="links-container show-container">
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/menu">Food Menu</Link>
                        </li>
                        <li>
                            <Link to="/accordion">Accordion</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
