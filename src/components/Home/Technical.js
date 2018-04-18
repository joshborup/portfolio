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
                         <li>Redux</li>
                         <li>Styled Components (CSS in JS)</li>
                         <li>HTML 5</li>
                         <li>CSS3</li>
                         <li>JavaScript</li>
                         <li>Bootstrap 4</li>
                    </ul>
                </div>

                 <div>
                    <h3>Back-End Development</h3>
                     <ul>
                         <li>Node</li>
                         <li>Express</li>
                         <li>Postgres</li>
                         <li>NPM</li>
                         <li>Git</li>
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