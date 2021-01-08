import React from 'react'
import './Char.css'
import holder from '../../static/images/Diluc.webp'

export default function Char() {
    return (
        <div>
        <div className="side-nav">
        </div>
        <div className="char-container">
            <div className="char-portrait">
                <img src={holder}></img>
            </div>
            <div className="circle"></div>
        </div>  
        </div>     
    )
}