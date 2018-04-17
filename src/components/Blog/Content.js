import React, { Component } from 'react';
import banner from './media/cloudinary-blog.png';

export default class Content extends Component {
    render() {
        return (
            <div className='content-display'>
                <div>
                    <img src={banner} />
                </div>
                <div className='title'>
                    <h1>How to upload signed and unsigned images to Cloudinary</h1>
                </div>

                <div className='body'>
                    <p>When creating a website that needs image upload functionality, there are quite a few things to consider</p>
                    <ul>
                        <li>Where to store images</li>
                        <li>method for uploading</li>
                        <li>image manipulation</li>
                        <li>security when uploading files</li>
                    </ul>
                    <p>I am going to show you how you can easily answer all of these questions using an image and video cloud management cloud, the best part is....it's free!</p>
                    <br/>
                    <p>There are many different options out there for hosting images, I choose cloudinary to for a few reasons</p>
                    <ul>
                        <li>300k uploads Free!</li>
                        <li>10Gb storage space</li>
                        <li>Free on the fly image manipulation</li>
                        <li>security when uploading files</li>
                    </ul>
                </div>

            </div>
        );
    }
}