import React from 'react'
import './Body.css'
import elem from '../../static/images/element.png'


export default function Header() {
    return (
        
        <div className="quote-section">
            <div className="deco"><img src={elem}></img></div>
            <h1><span>For everything</span>
            <span className="ital">Genshin Impact</span></h1>
        </div>
    )
}