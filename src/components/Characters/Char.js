import React from 'react'
import {render} from 'react-dom';
import './Char.css'
import { useState, useEffect } from 'react'
import bg from '../../static/images/mon.jpg'
import five from '../../static/images/5.png'
import four from'../../static/images/4.png'
import anemo from '../../static/images/anemo.png'
import cryo from '../../static/images/cryo.png'
import geo from '../../static/images/geo.png'
import hydro from '../../static/images/hydro.png'
import dendro from '../../static/images/dendro.png'
import electro from '../../static/images/electro.png'
import pyro from '../../static/images/pyro.png'
import particles from '../../static/images/particles.png'
import FadeIn from 'react-fade-in';
import { motion } from "framer-motion"
const axios = require("axios")

export default function Char() {
    const [allChar, setAllChar] = useState([])
    const [oneChar, setChar] = useState()
    const [charName, setCharName] = useState("albedo")
    const url = "https://api.genshin.dev/characters/all"
    function Rar(props) {
        if (props.rarity === 5) {
            return <img className="rarity" src={five}></img>
        } else if(props.rarity === 4) {
            return <img className="rarity2" src={four}></img>
        } else {
          return <p>PLEASE HELP!</p>
        }
    }
    function Elem(props) {
        if (props.vision === "Geo") {
            return <img className="elem" src={geo}></img>
        } else if (props.vision === "Anemo") {
            return <img className="elem" src={anemo}></img>
        } else if (props.vision === "Cryo") {
            return <img className="elem" src={cryo}></img>
        }  else if (props.vision === "Hydro") {
        return <img className="elem" src={hydro}></img>
        } else if (props.vision === "Electro") {
            return <img className="elem" src={electro}></img>
        } else if (props.vision === "Pyro") {
            return <img className="elem" src={pyro}></img>
        } else if (props.vision === "Dendro") {
            return <img className="elem" src={dendro}></img>
        } else {
            return <p>idk</p>
        }
    }
    function changeChar(e) {
        setCharName(e.target.innerText.toLowerCase())
    }
    useEffect( () => {
        async function fetchData()  {
            const data = await axios.get(url)
            setAllChar(data.data.map((char) => {
                return {name: char.name, rarity: char.rarity, icon: `https://api.genshin.dev/characters/${char.name.toLowerCase()}/icon`}
            }))
        }
        fetchData();
    }, [])
    const url2 = `https://api.genshin.dev/characters/${charName}`

    useEffect( () => {
        async function fetchChar()  { 
        const data2 = await axios.get(url2)
        const {name, description, rarity, portrait, vision} = data2.data
        // const stars = (rarity) => {switch (rarity) {
        //     case 5:  return <img src={five}></img>;
        //     case 4: return <img src={four}></img>;
        //     default: return <p>pls help</p>
        //       }}
        const charJSX = (
            
        <div>
            <div className="char-container">
            <div className="char-portrait"> 
            <img  className="particles" src={particles}></img>
            <img className="port" src={`https://api.genshin.dev/characters/${name.toLowerCase()}/portrait`}></img></div>
            <p className="chname">{name}</p>
            <p className="chdesc">{description}</p>
            <Rar rarity={rarity}/>
            <Elem vision={vision}/>
            <div className="circle"><img src={bg}></img></div>
            </div>
            </div>)
         
        setChar(charJSX) 
        }
        fetchChar(); 
    }, [charName])
    return (
        <div>
        <div className="side-nav">

        <div className="allChar">
        
        { allChar.map((char) => {
            return (
                <div>
                    <FadeIn>
                    <a value={char.name} onClick={(e)=>changeChar(e)}><ul class="char-name">{char.name} </ul></a>
                    <img className="char-image" src={char.icon} ></img>
                    </FadeIn>
          </div>
            )

        })}
        </div>
        </div>
        {oneChar}
        
        </div>  
          
    )
}
