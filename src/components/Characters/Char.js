import React from 'react'
import './Char.css'
import { useState, useEffect } from 'react'
import holder from '../../static/images/Diluc.webp'
import bg from '../../static/images/mon.jpg'
import five from '../../static/images/5.webp'
import four from'../../static/images/4.webp'
const axios = require("axios")

export default function Char() {
    const [allChar, setAllChar] = useState([])
    const url = "https://api.genshin.dev/characters/all"
    useEffect( () => {
        async function fetchData()  {
            const data = await axios.get(url)
            setAllChar(data.data.map((char) => {
                console.log(char)
                console.log(char.name.toLowerCase())
                return {name: char.name, icon: `https://api.genshin.dev/characters/${char.name.toLowerCase()}/icon`}
            }))
        }
        fetchData();
    }, [])
    return (
        <div>
        <div className="side-nav">
        <div className="allChar">
        { allChar.map((char) => {
            return (
                <div>
                    <ul class="char-name">{char.name} </ul>
                    <img className="char-image" src={char.icon}></img>
                    
                </div>
            )
        })}
        </div>
        </div>
        <div className="char-container">
        <div className="char-portrait"> 
                <img className="port" src={holder}></img>
                <p className="chname">Diluc</p>
                <p className="chdesc">The tycoon of a winery empire in Mondstadt,
                unmatched in every possible way.</p>
                <img className="rarity" src={five}></img>
               
            </div>
            <div className="circle"><img src={bg}></img></div>
        </div>  
        
        </div>  
        
           
    )
    
}
