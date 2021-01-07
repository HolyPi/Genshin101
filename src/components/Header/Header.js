import React from 'react'
import './Header.css'
import venti from '../../static/images/Venti2.png'
import genshi from '../../static/images/Genshin.png'

export default function Header() {
    return (
        <div className="hero-section">
            
        <div className="hero-sky">
        <img src={genshi} alt="icon"></img>
        </div>
        <div className="section2">
        <div className="hero-figure"><img src={venti} alt="Venti"></img></div>
        </div> 
       <div className="hero-quote">For everything Genshin Impact</div>
       </div> 
    )
}