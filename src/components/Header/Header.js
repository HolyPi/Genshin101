import React from 'react'
import './Header.css'
import venti from '../../static/images/Venti2.png'
import genshi from '../../static/images/Genshin.png'

export default function Header() {
    return (
        
        <div className="hero-section">
        <span>
        <div className="hero-sky">
        <img src={genshi} alt="icon"></img>
        </div>
        </span>
        <div className="hero-figure">
        <img src={venti} alt="Venti"></img>
        <h1>For everything Genshin Impact</h1></div>
       </div> 
       
    )
}