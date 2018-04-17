import React, { Component } from 'react';
import Blog from './Blog'
import Header from '../Shared/Header'
import './blog.css'

export default class BlogContainer extends Component {
    constructor(){
        super()
        this.state = {
            header: 'black'
        }
    }
    render() {
        return (
            <div>
                <Header header1={this.state.header} />
                <Blog/>
            </div> 
        );
    }
}