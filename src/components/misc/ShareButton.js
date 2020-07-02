import React from 'react';
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome"
import {faShare} from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const ShareButton = props => {

    const SIcon = styled(Icon)`
      font-size: 1rem;
      
`;

    const shareData = {
        title: `DiscordFoorumi - ${props.title}`,
        text: "Chekkaa tää juttu DiscordFoorumista",
        url: props.url
    };

    const initShare = () => {
        console.log(shareData);
        if(navigator.share){
            navigator.share(shareData)
                .then(() => {
                    console.log("Onnistui")
                })
            }
        else {
            console.error("Ei pyge")
        }
    };

    return (
        <div>
            <SIcon icon={faShare} color="#7289da" title="Jaa" onClick={initShare}>Jaa</SIcon>
        </div>
    );
};

export default ShareButton;