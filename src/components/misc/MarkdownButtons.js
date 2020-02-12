import React from 'react';
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faBold, faHeading, faItalic, faStrikethrough} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const MarkdownWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid #7289da;
    border-radius: 5px 5px 0 0;
    border-bottom-color: #666;
    background-color: #23272a;
    padding: 5px;
`;

const MarkdownButton = styled.button`
   border:none;
   background: none;
   padding: 5px;
   
   :hover{
      cursor: pointer;
   }
   
   svg {
      color: #7289da;
      transition: color .2s;
   }
   
   :hover svg {
      color: #FFF;
      
   }
`;

const MarkdownButtons = () => {
    return (
        <MarkdownWrapper>
            <MarkdownButton tabIndex="-1">
                <Icon icon={faBold}/>
            </MarkdownButton >
            <MarkdownButton tabIndex="-1">
                <Icon icon={faItalic}/>
            </MarkdownButton>
            <MarkdownButton tabIndex="-1">
                <Icon icon={faStrikethrough}/>
            </MarkdownButton>
            <MarkdownButton tabIndex="-1">
                <Icon icon={faHeading}/>
            </MarkdownButton>
        </MarkdownWrapper>
    );
};

export default MarkdownButtons;