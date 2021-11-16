import React from 'react'
import { Button } from './Button'
import './HeroContainer.css'

function HeroContainer() {
    return (
        <div className="hero-container">
            <video src='videos/video-1.mp4' autoPlay loop muted />
            <h1>ADVENTURE</h1>
            <p>what are you looking for?</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle="btn--outline"
                buttonSize="btn-large"
                >
                    GET STARTED
                </Button>
                <Button 
                className='btns' 
                buttonStyle="btn--primary"
                buttonSize="btn-large"
                >
                    WATCH TRAILER <i className='fa fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}
export default HeroContainer
