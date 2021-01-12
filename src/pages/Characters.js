import React from 'react'
import Char from '../components/Characters/Char'
import Navbar2 from '../components/Navbar2/Navbar2'
import FadeIn from 'react-fade-in';



export default function Characters() {
    return (
        <body id="char">
        <div>
            <FadeIn>
            <Navbar2 />
           <Char/>
           </FadeIn>
              
        
        </div>
        </body>
    )
}