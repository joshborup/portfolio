import React, { Component } from 'react';
import Contact from './Contact';
import Header from '../Shared/Header'
import axios from 'axios';
import './contact.scss'

export default class ContactContainer extends Component {
    constructor(props){
        super()
        this.state = {
            name: '',
            email: '',
            message: '',
            result: '',
            header: 'black'
        }
    }

    changeHandler = (prop, val) => {
        this.setState({
            [prop]:val
        })
    }

    sendMessage = () => {
        axios.post('/api/contact', {name: this.state.name, email: this.state.email, message: this.state.message}).then(response => {
            console.log(response)
            this.setState({
                result: response.data.result,
                name: '',
                email: '',
                message: '',
                
            })
        })
    }

    render() {
        return (
            <div>
                <Header header2={this.state.header}/>
                <Contact
                    changeHandler={this.changeHandler}
                    state={this.state}
                    sendMessage={this.sendMessage} 
                />
            </div>
        );
    }
}