import React, { Component } from 'react';

export default class Education extends Component {
    render() {
        return (
            <div className='education-display'>
                <h2>Education</h2>
                <div>
                    <div>
                        <h3>Full-Stack JavaScript Developer</h3>
                        <h4>(Node.js, React.js, Express.js PostgreSQL, HTML5, CSS3, JavaScript)</h4>
                        <p>DevMountain Immersive Web Program | Phoenix, AZ</p>
                    </div> 

                        <div>
                        <h3>Animal Physiology &amp; Behavior B.S.</h3>
                        <p>Arizona State University | Tempe, AZ | 3.4 GPA</p>
                    </div>
                </div>
                
            </div>
        );
    }
}