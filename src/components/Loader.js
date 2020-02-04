import React from 'react';
import styled from "styled-components";

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

const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border: 3px solid #7289da;
    border-radius: 50%;
    border-left-color: transparent;
    animation: spin 1s infinite ;
    
    @keyframes spin {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const Loader = () => {
    const loadingMessages = [
        {
            message: "Wobbling to 299%"
        },
        {
            message: "DISCORD REQUIRES MORE MINERALS"
        },
        {
            message: "Untap, Upkeep, Draw"
        },
        {
            message: "Traveling to Hanamura"
        },
        {
            message: "TIME'S UP - LET'S DO THIS!"
        },
        {
            message: "This loading is a line"
        },
        {
            message: "They see me loading, They waiting"
        },
        {
            message: "Start your engines"
        },
        {
            message: "Skipping cutscenes"
        },
        {
            message: "Shuffling the deck"
        },
        {
            message: "Reviving dead memes"
        },
        {
            message: "Returning the slab"
        },
        {
            message: "Recombobulating Discombobulators"
        },
        {
            message: "now with scratch and sniff"
        },
        {
            message: "Now with 100% more Screenshare!"
        },
        {
            message: "Dropping in Pochinki"
        },
        {
            message: "Looking for the power button"
        },
        {
            message: "Look behind you"
        },
        {
            message: "Locating Wumpus"
        },
        {
            message: "Loading your digital hug"
        },
        {
            message: "Loading Simulation"
        },
        {
            message: "Jumping to hyperspace"
        },
        {
            message: "Is this thing on?"
        },
        {
            message: "Initiating launch sequence"
        },
        {
            message: "Initializing socialization"
        },
        {
            message: "If you are reading this, you can read"
        },
        {
            message: "I swear it's around here somewhere..."
        },
        {
            message: "i need healing"
        },
        {
            message: "how do i turn this thing on"
        },
        {
            message: "Loading machine broke"
        },
        {
            message: "Get ready for a surprise!"
        },
        {
            message: "Finishing this senta..."
        },
        {
            message: "Dusting the cobwebs"
        },
        {
            message: "Do you even notice these?"
        },
        {
            message: "Opening the loading bay doors"
        },
        {
            message: "Discord is my city"
        },
        {
            message: "Disconnecting from Reality"
        },
        {
            message: "Charging spirit bomb"
        },
        {
            message: "Charging Limit Break"
        },
        {
            message: "Calibrating flux capacitors"
        },
        {
            message: "Buckle up!"
        },
        {
            message: "Assembling Voltron"
        },
        {
            message: "Are we there yet?"
        },
        {
            message: "A brawl is surely brewing!"
        },
        {
            message: "LOADING 001: ARP 303 Saw"
        },
        {
            message: "*Elevator Music Plays*"
        },
        {
            message: "Researching cheat codes"
        },
        {
            message: "Wizard needs food badly"
        },
        {
            message: "Decrypting Engrams"
        },
        {
            message: "And now for something completely different"
        },
        {
            message: "Stopping to smell the flowers"
        },
        {
            message: "Achieving Nirvana"
        },
        {
            message: "Managing Inventory"
        }
    ];

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