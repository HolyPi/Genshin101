import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar2.css'
import si from '../../static/images/GI.png'


export default function Navbar2() {
    return (
        <nav>
            <a href="/"><img className="logo2" src={si} alt="logo"></img></a>
            <ul className="nav-links">
                <li className="litwo"><Link to="/characters">Characters</Link></li>
                <li className="litwo"><Link to="/elements">Elements</Link></li>
                <li className="litwo"><Link to="/domains">Domains</Link></li>
            </ul>
        </nav>
 
    )
}