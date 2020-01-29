import React from 'react';
import styled from "styled-components";

const SButton = styled.a`
    background-color: #7289da;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color .2s;
    font-size: 1rem;
    padding: .25rem .5rem;
    text-decoration: none;
    
    :hover {
        background-color: #2c2f33;
    }
`;

const Button = props => {
    return (
        <SButton href={props.href} onClick={props.onClick}>
            {props.children}
        </SButton>
    );
};

export default Button;