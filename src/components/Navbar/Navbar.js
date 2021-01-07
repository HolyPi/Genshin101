import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Navbar() {
    return (
        <Router>
       
        <nav>
            <ul className="nav-links">
                <li><Link to="/">Characters</Link></li>
                <li><Link to="/">Elements</Link></li>
                <li><Link to="/">Domains</Link></li>
            </ul>
        </nav>
 
</Router>
    )
}