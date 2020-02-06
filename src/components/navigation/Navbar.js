import React from 'react';
import styled from "styled-components";
import Login from "../discord/Login";
import {useSelector} from "react-redux";
import Logout from "../discord/Logout";
import {Link} from "react-router-dom";
import BoardLinks from "../boards/BoardLinks";
import Spinner from "../misc/loader/Spinner";
import logo from '../../assets/Discord-Logo-Color.png'

const NavWrapper = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
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
    const user = useSelector(state => state.discordUser.user);
    const userLoading = useSelector(state => state.discordUser.loading);
    const loggedIn = useSelector(state => state.loggedIn);

    return (
        <NavWrapper>
            <STitle>
                <Link to="/">
                    Foorumi
                </Link>
            </STitle>
            <ProfileWrapper>
                {loggedIn && !userLoading ? <SMessage>Tervetuloa, {user.username}</SMessage> : <SMessage>Kirjaudu sisään saakeli!</SMessage>}
                {loggedIn && !userLoading ? <Link to="/profile"> {user.avatar ? <SProfileImg src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg`} alt=""/> : <SProfileImg src={logo} alt=""/> } </Link> : <Spinner/>}
            </ProfileWrapper>
            {loggedIn ? <Logout/> : <Login/>}
            <BoardLinks/>
        </NavWrapper>
    );
};

export default Navbar;