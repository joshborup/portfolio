import React, { Component } from 'react';

export default class Experience extends Component {
    render() {
        return (
            <div className='experience-display'>

                <h2>Experience</h2>

                <div>

                    <div>
                        <h3>Free-Lance Developer <span className='experience-dates'>(march 2017 - Present)</span></h3>
                        <h4>Front end web developer</h4>
                        <ul>
                            <li>Consulted with client to outline website goals, illustrate wire frame, and site functionality</li>
                            <li>Assisted customers with a variety of issues including navigating the Linux file system from the command line, firewall administration, DNS issues, and site debugging issues where applicable</li>
                        </ul>
                    </div>
            
                    <div>
                        <h3>Crucial Web Host <span className='experience-dates'>(Arpil 2016 - November 2017)</span></h3>
                        <h4>Web Server Administrator</h4>
                        <ul>
                            <li>As a Web Server Administrator for crucial web host I was responsible for providing linux support to approximately 1,000 clients utilizing web services such as Magento, WordPress, Redis, Varnish, cPanel</li>
                            <li>Assisted customers with a variety of issues including navigating the Linux file system from the command line, firewall administration, DNS issues, and site debugging issues where applicable</li>
                        </ul>
                    </div>

                    

                </div>
            </div>
        );
    }
}