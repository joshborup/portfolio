import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects-display">
                
                    <h2>Projects</h2>
                

                 <div>
                     <h3>Saturn's List</h3>
                     <a href='https://www.saturnslist.com'>SaturnsList.com</a>
                     <p>Saturn's List is a Craigslist style website built for astronomy enthusiasts to buy and sell astronomy equipment</p>
                     <p>This site employs technologies such as <span className='stack'>React/Redux, CSS3, Node, Express, PostgreSQL, RESTful API's</span></p>
                </div>

                 <div>
                 <h3>MenuBOMB</h3>
                     <a href='https://www.menubomb.com'>MenuBOMB.com</a>
                     <p>Saturn's List is a Craigslist style website built for astronomy enthusiasts to buy and sell astronomy equipment</p>
                     <p>This site employs technologies such as <span className='stack'>React/Redux, CSS3, Styled-Components, Node, Express, PostgreSQL, RESTful API's</span></p>
                </div>

                 <div>
                 <h3>Scroll Animation</h3>
                     <a href='http://scrollanimation.com/'>ScrollAnimation.com</a>
                     <p>Scroll Animation is a simple JavaScript plugin that allows you apply pre-built scrolling animations into a project using class names</p>
                     <p>This site employs technologies such as <span className='stack'>Bootstrap 4, CSS3, HTML5, JavaScript</span></p>
                </div>

                 
            </div>
        );
    }
}