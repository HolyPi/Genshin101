import React from 'react'
import './Header.css'
import venti from '../../static/images/Venti3.png'
import genshi from '../../static/images/Genshin.png'

export default function Header() {
    return (
        
        <div className="hero-section">
        <div className="hero-figure"></div>
        <div className="hero-img"><img src={venti} alt="Venti"></img></div>
        <div className="hero-logo"><img src={genshi} alt="Logo"></img></div>
        </div>
       
    )
}