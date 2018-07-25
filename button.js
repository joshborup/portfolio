import React from 'react';

const Button = (props) => {
    return (
        <img onClick={() => props.action()} src={props.image}/>
    );
};

export default Button;