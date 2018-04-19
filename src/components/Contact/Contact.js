import React from 'react';

const Contact = (props) => {
    return (
            <div className='contact-display'>
                <h1>Contact Me</h1>
                <div>
                    <span>{props.state.result}</span>
                    <input placeholder='NAME' name='name' value={props.state.name} onChange={(e) => props.changeHandler(e.currentTarget.name, e.currentTarget.value)} />
                    <input placeholder='E-MAIL' name='email' value={props.state.email} onChange={(e) => props.changeHandler(e.currentTarget.name, e.currentTarget.value)}  />
                    <textarea placeholder='MESSAGE' name='message' value={props.state.message} onChange={(e) => props.changeHandler(e.currentTarget.name, e.currentTarget.value)}  />
                    <button onClick={() => props.sendMessage()} >SUBMIT!</button>
                </div>
            </div>
    )
};

export default Contact;