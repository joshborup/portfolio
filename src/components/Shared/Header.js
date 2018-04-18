import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css'


export default class Header extends Component {

    render() {

        const home = {
            color: this.props.header
        }

        const blog = {
            color: this.props.header1
        }
        return (
            <div className='nav-header'>
                <div>
                    <ul>
                        <Link style={home}  to='/'><li>Home</li></Link>
                        <Link style={blog} to='/blog'><li>Blog</li></Link>
                        <Link style={blog} to='/contact'><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
        );
    }
}