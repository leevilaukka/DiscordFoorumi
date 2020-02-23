import React from 'react';
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faBold, faHeading, faItalic, faStrikethrough, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {faMarkdown} from "@fortawesome/free-brands-svg-icons";

const MarkdownWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid #7289da;
    border-bottom: 1px dashed #666 ;
    border-radius: 5px 5px 0 0;
    background-color: #23272a;
    padding: 5px;
    align-items: center;
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
const MarkdownIcon = styled.a`
    margin-left: auto;
    margin-right: 5px;
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
            <MarkdownButton tabIndex="-1" title="Lihavoi">
                <Icon icon={faBold}/>
            </MarkdownButton >
            <MarkdownButton tabIndex="-1" title="Kursivoi">
                <Icon icon={faItalic}/>
            </MarkdownButton>
            <MarkdownButton tabIndex="-1" title="Yliviivaa">
                <Icon icon={faStrikethrough}/>
            </MarkdownButton>
            <MarkdownButton tabIndex="-1" title="Otsikko">
                <Icon icon={faHeading}/>
            </MarkdownButton>
            <MarkdownButton tabIndex="-1" title="Spoiler">
                <Icon icon={faEyeSlash}/>
            </MarkdownButton>
            <MarkdownIcon href="https://en.wikipedia.org/wiki/Markdown" target="_blank" title="Tämä tekstikenttä tukee Markdownia! Lue lisää klikkaamalla." tabIndex="-1">
                <Icon icon={faMarkdown}/>
            </MarkdownIcon>
        </MarkdownWrapper>
    );
};
//TODO Markdown ohjesivu
export default MarkdownButtons;