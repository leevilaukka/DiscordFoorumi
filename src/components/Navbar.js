import React from 'react';
import styled from "styled-components";
import Login from "./Login";
import {useSelector} from "react-redux";
import Logout from "./Logout";
import {Link} from "react-router-dom";

const NavWrapper = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    
    a {
        align-self: center;
    }
`;

const STitle = styled.span`
    align-self: center;
    
    a {
        color: #7289da;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.6rem;
    }
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

const SProfileImg = styled.img`
    height: 50px;
    border-radius: 50%;

`;

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-self: flex-end;
    margin-left: auto;
    margin-right: 1rem;
    
    p {
        margin-right: 1rem;
    }
`;

const Navbar = () => {
    const user = useSelector(state => state.user.user);
    const loggedIn = useSelector(state => state.loggedIn);

    return (
        <NavWrapper>
            <STitle>
                <Link to="/">
                    Foorumi
                </Link>
            </STitle>
            <ProfileWrapper>
                {loggedIn ? <SMessage>Tervetuloa, {user.username}</SMessage> : <SMessage>Kirjaudu sisään saakeli!</SMessage>}
                {loggedIn && <Link to="/guilds"><SProfileImg src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg`} alt=""/></Link>}
            </ProfileWrapper>
            {loggedIn ? <Logout/> : <Login/>}
        </NavWrapper>
    );
};

export default Navbar;