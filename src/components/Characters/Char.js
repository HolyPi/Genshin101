import React from 'react'
import './Char.css'
import holder from '../../static/images/Diluc.webp'
import bg from '../../static/images/mon.jpg'
import five from '../../static/images/5.webp'
import four from'../../static/images/4.webp'

export default function Char() {
    return (
        <div>
        <div className="side-nav">
        </div>
        <div className="char-container">
            
            <div className="char-portrait">
                <img src={holder}></img>
                <div className="name">Diluc</div>
                <div className="desc">The tycoon of a winery empire in Mondstadt,
                unmatched in every possible way.</div>
               
            </div>
            <div className="circle"><img src={bg}></img></div>
        </div>  
        
        </div>     
    )
}