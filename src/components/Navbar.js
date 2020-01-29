import React from 'react';
import styled from "styled-components";
import Login from "./Login";
import {useSelector} from "react-redux";



const NavWrapper = styled.div`
    width: 100%;
    padding: 1rem;
`;

const STitle = styled.h3`
    color: #7289da;
`;

const SLink = styled.div`
    a{
        text-decoration: none;
        transition: color .2s;
        :hover{
            color: #7289da
        }
    }
`;
const SMessage = styled.p`
    
`;
const Navbar = () => {
    const user = useSelector(state => state.user.user);
    const loggedIn = useSelector(state => state.loggedIn);

    return (
        <NavWrapper>
            <STitle>Foorumi</STitle>
            {loggedIn ? <SMessage>Tervetuloa, {user.username} </SMessage> : <SMessage>Kirjaudu sisään saakeli!</SMessage>}
        </NavWrapper>
    );
};

export default Navbar;