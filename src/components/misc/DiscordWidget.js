import React from 'react';
import {useSelector} from "react-redux";
import styled from "styled-components";

const EmbedContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: #23272A;
    border-radius: 5px;
    margin-bottom: 1rem;
`;

const EmbedWrapper = styled.div`
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;
    width: 100%;
    margin-bottom: 1rem;
    
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
`;

const DiscordWidget = () => {

    const user = useSelector(state => state.discordUser.user);

    return (
        <EmbedContainer>
            <EmbedWrapper>
                <iframe src={`https://discordapp.com/widget?id=349448013711933446&theme=dark&username=${user.username}`} width="100%" height="500"
                        allowTransparency="true" frameBorder="0">
                    Discordupote
                </iframe>
            </EmbedWrapper>
        </EmbedContainer>
    );
};

export default DiscordWidget;