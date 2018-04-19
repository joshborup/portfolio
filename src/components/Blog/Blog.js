import React, { Component } from 'react';
import Content from './Content';

export default class BlogContainer extends Component {
    render() {

        const month = new Date()
        const year = new Date()

        return (
                <div className="blog-display">
                    <div>
                        <h1>Blog</h1>
            
                        <span>{month.getMonth() + 1 + '/' + year.getFullYear()}</span>
                    </div>
                    <Content />
                </div>
        );
    }
}