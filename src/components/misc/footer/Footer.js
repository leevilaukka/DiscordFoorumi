import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  flex-direction: column;
  
  p {
    color: #aaa;
    margin-bottom: .5rem;
  }
  
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>DiscordFoorumi (work in progress)</p>
            <p>2020 &copy; Leevi Laukka</p>
        </FooterContainer>
    );
};

export default Footer;