import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import profile from './media/profile.jpg';
import linkedin from './media/linkedin.svg';
import github from './media/github.svg';
import email from './media/email.png'

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
                            <img src={profile}/>
                        </div>
                        <div>
                            <h1>JOSHUA BORUP</h1>
                            <h2>Full-Stack Web Developer</h2>
                        </div>
                        <div className='contact-info'>
                            <div>
                                <div className='space'></div>
                                <a href="#">joshborup.com</a>
                            </div>
                            <div>
                            <a href="mailto:joshborup@gmail.com"><img src={email} /></a>
                                 <a href="mailto:joshborup@gmail.com">joshborup@gmail.com</a>
                            </div>
                            <div>
                                <div className='space'></div>
                                <a href="tel:4803209766">4803209766</a>
                            </div>
                            <div>
                                <a href='https://www.linkedin.com/in/joshborup/' className='social'><img src={linkedin}/></a>
                                <a href='https://github.com/joshborup' className='social'><img src={github}/></a>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        );
    }

}