import React, {useState} from 'react';
import styled from "styled-components";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

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

const VideoThumbnail = styled.img`
    max-width: 200px;
    width: 100%;
    height: auto;
`;

const ThumbnailWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    
    svg {
        position:absolute;
        color: #282828;
        transition: color .2s;
        :hover {
            color: #FF0000;
        }     
    }
    
`;

const CloseButton = styled.div`
  margin-left: auto;
  color: #ffffff;
  
  :hover {
    cursor: pointer;
  }
  
  svg {
    margin-right: .5rem;
  }
`;

const YoutubeEmbed = props => {

    const youtube_parser = url => {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    };

    const video = `https://www.youtube.com/embed/${youtube_parser(props.videoID)}?autoplay=1`;
    const image = `https://img.youtube.com/vi/${youtube_parser(props.videoID)}/maxresdefault.jpg`;
    let [open, setOpen] = useState(false);

    return (
        <>
            {
                open
                    ?
                    <EmbedContainer>
                        <EmbedWrapper>
                            <iframe
                                title={props.videoID}
                                width="100%"
                                height="100%"
                                src={video}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            >
                                Youtube-video
                            </iframe>
                        </EmbedWrapper>
                        <CloseButton onClick={() => setOpen(!open)}>
                            <Icon icon={faWindowClose}/>
                            Klikkaa sulkeaksesi upotteen
                        </CloseButton>
                    </EmbedContainer>
                    :
                    <div>
                        <ThumbnailWrapper onClick={() => setOpen(!open)}>
                            <Icon
                                icon={faYoutube}
                                size="4x"
                            />
                            <VideoThumbnail src={image}/>
                        </ThumbnailWrapper>
                    </div>
            }
        </>
    );
};

export default YoutubeEmbed;