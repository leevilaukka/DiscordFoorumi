import React from 'react';
import styled from "styled-components";

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

const Rickroll = () => {

    const rickroll = Math.floor(Math.random() * Math.floor(100));

    return (
        rickroll === 69
        &&
        <EmbedWrapper>
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
                Youtube-video
            </iframe>
        </EmbedWrapper>
    );
};

export default Rickroll;