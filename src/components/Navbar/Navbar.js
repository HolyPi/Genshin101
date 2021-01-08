import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import si from '../../static/images/GI.png'


export default function Navbar() {
    return (
        <nav>
            <ul className="nav-links">
                <li><Link to="/characters">Characters</Link></li>
                <li><Link to="/">Elements</Link></li>
                <li><Link to="/">Domains</Link></li>
            </ul>
        </nav>
 
    )
}