import React from 'react';
import styled from "styled-components";

const SAppWrapper = styled.div`
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
`;

const AppWrapper = props => {
    return (
        <SAppWrapper>
            {props.children}
        </SAppWrapper>
    );
};

export default AppWrapper;