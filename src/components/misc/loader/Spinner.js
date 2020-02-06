import React from 'react';
import styled from "styled-components";

const SSpinner = styled.div`
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

const Spinner = () => {
    return (
        <div>
            <SSpinner/>
        </div>
    );
};

export default Spinner;