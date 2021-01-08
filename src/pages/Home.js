import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Body from '../components/Body/Body'

export default function Home() {
    return (
        <div>
            
            <div className="background">
            
                <Navbar />
                <Header />
                <Body />
               
                </div>
                
        </div>
    )
}