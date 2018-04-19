import React, { Component } from 'react';
import banner from './media/cloudinary-blog.png';
import signup from './media/cloudinary_Account.png';
import settings from './media/settings.png';
import PrismCode from 'react-prism';
import Prism from 'prismjs';

export default class Content extends Component {

    render() {

      
        return (
            <div className='content-display'>
                <div>
                    <img src={banner} />
                </div>
                <div className='title'>
                    <h1>How to upload signed images to Cloudinary in React</h1>
                </div>

                <div className='body'>
                    <p>Cloudinaries documentation can be confusing at times, but after much trial and error I was able to securely upload user submitted image files from my react app straight to my cloudinary cloud account. In the future I am going to go over uploading unsigned images (which is actually much easier) but for this post, I wanted to give easy to follow instructions on how to securely upload images directly from the clientside of your react app, this example uses the react library however the same instructions can be used for really any app that uses Node on the backend and employs HTML and JavaScript on the frontend</p>
                    <br/>
                    <h2>First, what is Cloudinary?</h2>
                    <p> Cloudinary is a media management platform for developers, so you would use it if you wanted to store a lot of media files remotely and manage them all in one place. There are many different options out there for hosting images however, I chose Cloudinary for a few reasons</p>
                    <ul>
                        <li>300k uploads Free</li>
                        <li>10Gb storage space</li>
                        <li>Free on the fly image manipulation</li>
                        <li>security when uploading files</li>
                    </ul>
                    <br/>
                    <h2>Sign up for a Cloudinary account</h2>
                    <p>First you want to head over and sign up for a <a href='https://www.cloudinary.com'>Cloudinary</a> account which will direct you to your user dashboard.</p>

                    <p>From your dashboard page you have all of the relevent information you need, this includes your API key, API secret, and the API Base URL for image uploads</p>
                    <img src={signup} />

                    <p>You will then want to go to the settings page and navigate to the bottom of the upload tab. From there you need to create an upload preset, this is just a set of directions to tell cloudinary how you would like the images to be manipulated when they are first uploaded.  For this tutorial you will want to set your default upload preset as the preset you just made.</p>

                    <img src={settings} />

                    <h2>Setting up your backend</h2>

                    <p>Now that your Cloudinary account has been set up, you will want to set up your server file, this will be where you create a signature that will be passed to your front end and then uploaded to Cloudinary alongside your image.</p>

                    <p>We will start off with a basic working express.js server</p>

                    <strong>Required Node Packages</strong>
                    <ul>
                        <li>Express.js</li>
                        <li>cloudinary</li>
                        <li>dotenv</li>
                        <li>bodyParser</li>
                    </ul>
                    <pre className='code'>
{`
const app = require('express')()
const cloudinary = require('cloudinary');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json())



app.listen(4000, ()=> console.log(listening on port 4000))`}
                    </pre>

                    <p>Now that we have a basic server file up and running, we are going to set up an endpoint that when hit will pass our hashed Secret API signature to the clientside</p>

                    <pre className='code'>
{`
app.get('/api/upload', (req, res) => {

    const timestamp = Math.round((new Date()).getTime() / 1000);
    
    const api_secret  = process.env.CLOUDINARY_SECRET_API;

    const signature = cloudinary.utils.api_sign_request({ timestamp: timestamp }, api_secret);

    const payload = {
        signature: signature,
        timestamp: timestamp
    };
        res.json(payload);

}).catch(err => console.log(error))`}
    
                        </pre>

                        <p>There are a few required portions when generating our hashed signature, first is a timestamp (UNIX format) which is saved to the timestamp variable, the signature will expire 1 hour after the timestamp was generated</p>
                        <br/>
                        <p>
                            The next is pulling in our Secret API from our secure .env file and setting it to the api_secret variable
                        </p>
                        <br/>
                        <p>
                            We then want to use cloudinaries built in signature hasher and pass out timestamp as an object and the api secret as our second argument. This is all saved to the signature variable
                        </p>
                        <br/>
                        <p>
                            The last step in the server file is to make an object that holds our signature and timestamp which is then sent to the front end
                        </p>

                        <h2>Front End (React App)</h2>

                        <p>Switch over to your react-app and create a function that will initate the signature request from the server when someone has uploaded, you will then grab the payload which has your signature and timestamp passed from your server and set it into a new form using 'new FormData()'</p>

                        <p>In your form you will also want to append your image file and your API KEY displayed in your cloudinary account dashboard</p>

                        <pre className='code'>
{`
handleImageUpload = (file) => {

    axios.get('/api/upload').then(response => {

        let formData = new FormData();
        formData.append("signature", response.data.signature)
        formData.append("api_key", "496317639374845");
        formData.append("timestamp", response.data.timestamp)
        formData.append("file", file[0]);
   `}
    
                        </pre>

                        <p>
                            Within that same axios promise, you will want to make another axios call that sends that form to the your Cloudinary API BASE URL found in your account dashboard (make sure to get url for uploading images)
                        </p>

                        <pre className='code'>
{`      axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
   `}
     </pre>

     <p>You can then set state with the secure_url sent back in cloudinaries response</p>

     <pre className='code'>
{`          this.setState({
            uploadedFileCloudinaryUrl: response.data.secure_url
            })
        }).catch( err => {
        console.log(err);
        })

    })
}
   `}
     </pre>

     <p>You can then either save that url in your database or display it directly on the page, and thats it, you can now upload signed images to your cloudinary account</p>

                </div>

            </div>
        );
    }
}