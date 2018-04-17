import React, { Component } from 'react';
import LandingBanner from './LandingBanner';
import Technical from './Technical';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Header from '../Shared/Header';


export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            header: 'black'
        }
    }
    render() {
        return (
            <div className='Home-container'>
                <Header header={this.state.header}/>
                <LandingBanner/>
                <Technical/>
                <Projects/>
                <Experience/>
                <Education/>
            </div>
        );
    }
}