import React from 'react';
import styled from "styled-components";
import loadingMessages from '../../../assets/loaders'
import Spinner from "./Spinner";

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

const LoaderText = styled.h2`
    color: #7289da;
    animation: scale 1s infinite;
    transform-origin: center;
    display: inline-block;
    margin-bottom: 1rem;
    
    @keyframes scale {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
`;


const Loader = () => {
    const randomLoadingText = () => {
        return loadingMessages[Math.floor(Math.random() * Math.floor(loadingMessages.length))].message;
    };

    return (
        <LoaderWrapper>
            <LoaderText>
                {randomLoadingText()}
            </LoaderText>
            <Spinner/>
        </LoaderWrapper>
    );
};

export default Loader;