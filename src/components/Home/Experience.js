import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div className="experience-display">
        <h2>Experience</h2>
        <div>
          <div>
            <h3>
              DevMountain{" "}
              <span className="experience-dates">(jan 2019 - present)</span>
            </h3>
            <h4>Web Development Lead Instructor (Phoenix Campus)</h4>
            <ul>
              <li>
                In charge of prepping, writing and teaching daily lectures on
                topics such as JavaScript: beginner to advanced, React, Redux,
                PostgreSQL, MongoDB, Node, Express.js, HTML/CSS3: beginning to
                advanced, Socket.io
              </li>
              <li>
                Interview, hire, and manage teams of mentors with the goal of
                increasing student trust and learning
              </li>
              <li>
                Ran regular mentor training on subjects such as setting up and
                managing a PostgreSQL or MongoDB database on a linux server,
                Advanced Socket.iO and sharing a session between a socket and a
                restful api, Intro to React Native, Intro to WebAssembly and
                GoLang
              </li>
              <li>
                Company/Community outreach to provide lasting relationships for
                the benefit of our students and the tech field as a whole
              </li>
            </ul>
          </div>
          <div>
            <h3>
              DevMountain{" "}
              <span className="experience-dates">(Aug 2018 - Jan 2019)</span>
            </h3>
            <h4>Web Development Lead Mentor (Phoenix Campus)</h4>
            <ul>
              <li>
                In charge of teaching lectures once to twice a week on topics
                such as React-Router, React-Redux, GraphQL, Node/Express.js,
                Unit and Integration testing with Jest and Sinon, beginning to
                advanced HTML/CSS3
              </li>
              <li>
                Designed and Developed inhouse tracking and analytics system to
                both help track success of students through the course and to
                allow students to track thier own personal progress through
                thier own portfolio page
              </li>
            </ul>
          </div>

          <div>
            <h3>
              DevMountain{" "}
              <span className="experience-dates">(April 2018 - Aug 2018)</span>
            </h3>
            <h4>Web Development Mentor (Phoenix Campus)</h4>
            <ul>
              <li>
                Taught Lectures on Node/Express and Jest unit testing, lead
                review sessions, taught mini lectures on technologies such as
                Socket.io and Sass
              </li>
              <li>
                Helped develop the afternoon project on Auth0 to help solidify
                integrating social media logins for web based applications{" "}
              </li>
            </ul>
          </div>

          <div>
            <h3>
              Free-Lance Web Developer{" "}
              <span className="experience-dates">(march 2017 - Present)</span>
            </h3>
            <h4>Front end web developer</h4>
            <ul>
              <li>
                Consulted with clients to outline website goals, illustrate wire
                frame, and site functionality
              </li>
              <li>
                Developed, managed, maintain and updated existing web sites for
                customers and provide customer service.
              </li>
            </ul>
          </div>

          <div>
            <h3>
              Crucial Web Host{" "}
              <span className="experience-dates">
                (Arpil 2016 - November 2017)
              </span>
            </h3>
            <h4>Web Server Administrator</h4>
            <ul>
              <li>
                Web Server Administrator responsible for providing linux support
                to approximately 1,000 clients utilizing web services such as
                Magento, WordPress, Redis, Varnish, cPanel
              </li>
              <li>
                Assisted customers with a variety of issues including navigating
                the Linux file system from the command line, firewall
                administration, DNS issues, and site debugging issues where
                applicable
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
