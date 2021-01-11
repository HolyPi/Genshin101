import React from 'react'
import {render} from 'react-dom';
import './Char.css'
import { useState, useEffect } from 'react'
import holder from '../../static/images/Diluc.webp'
import bg from '../../static/images/mon.jpg'
import five from '../../static/images/5.webp'
import four from'../../static/images/4.webp'
const axios = require("axios")

export default function Char() {
    const [allChar, setAllChar] = useState([])
    const [oneChar, setChar] = useState()
    const [charName, setCharName] = useState("albedo")
    const url = "https://api.genshin.dev/characters/all"
    function Rar(props) {
        if (props.rarity == 5) {
            return <img src={five}></img>
        } else if(props.rarity == 4) {
            return <img src={four}></img>
        } else {
          return <p>PLEASE HELP!</p>
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
        const {name, description, rarity, portrait} = data2.data
        const stars = (rarity) => {switch (rarity) {
            case 5:  return <img src={five}></img>;
            case 4: return <img src={four}></img>;
            default: return <p>pls help</p>
              }}
        const charJSX = (<div>
            <div className="char-container">
            <div className="char-portrait"> 
            <img className="port" src={`https://api.genshin.dev/characters/${name.toLowerCase()}/portrait`}></img>
            <p className="chname">{name}</p>
            <p className="chdesc">{description}</p>
            <Rar rarity={rarity}/>
            { 
        }
   

            <p className="rar">{rarity}</p>
            </div>
            <div className="circle"><img src={bg}></img></div>
            </div>
            </div>)
        setChar(charJSX)   
        console.log(data2)
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
                    <a value={char.name} onClick={(e)=>changeChar(e)}><ul class="char-name">{char.name} </ul></a>
                    <img className="char-image" src={char.icon}></img>
            
          </div>
            )

        })}
        </div>
        </div>
        {oneChar}
        </div> 
        
           
    )
    
}
