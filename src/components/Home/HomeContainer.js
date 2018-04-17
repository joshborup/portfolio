import React, { Component } from 'react';
import LandingBanner from './LandingBanner';
import Technical from './Technical';
import Projects from './Projects'


export default class Home extends Component {
    render() {
        return (
            <div className='Home-container'>
                <LandingBanner/>
                <Technical/>
                <Projects/>
            </div>
        );
    }
}