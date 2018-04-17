import React, { Component } from 'react';
import Typing from 'react-typing-animation'

export default class LandingBanner extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
        
    }


    



    render() {
        return (
            <div className='landing-banner-display'>
                <div>
                    <div className="header">
                        <div>
                            <h1>JOSH BORUP</h1>
                            <h2>Full Stack Web Developer</h2>
                        </div>
                        <div>
                            <a href="#">joshborup.com</a>
                            <a href="mailto:joshborup@gmail.com">joshborup@gmail.com</a>
                            <a href="tel:4803209766">4803209766</a>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        );
    }

}