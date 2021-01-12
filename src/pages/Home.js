import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Body from '../components/Body/Body'
import FadeIn from 'react-fade-in'

export default function Home() {
    return (
        <div>
            
            <div className="background">
                <FadeIn>
                <Navbar />
                </FadeIn>
                <Header />
                
                <Body />
                
                </div>
                
        </div>
    )
}