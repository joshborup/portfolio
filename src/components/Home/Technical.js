import React, { Component } from 'react';

export default class Technical extends Component {
    render() {
        return (
            <div className="technical-display">
                
                    <h2>Technical</h2>
                

                <div>
                    <h3>Front-End Development</h3>
                    <ul>
                        <li>React</li>
                        <li>React Context API</li>
                        <li>Redux</li>
                        <li>Styled Components (CSS in JS)</li>
                        <li>Sass</li>
                        <li>Progressive Web Apps</li>
                        <li>HTML 5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                <div>
                <h3>Back-End Development</h3>
                    <ul>
                        <li>Node</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>Graphql</li>
                        <li>Socket.io</li>
                        <li>NPM</li>
                        <li>Git</li>
                        <li>Jest/Sinon</li>
                    </ul>
                </div>

                <div>
                    <h3>UI/UX Design</h3>
                    <ul>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                    </ul>
                </div>

                
            </div>
        );
    }   
}