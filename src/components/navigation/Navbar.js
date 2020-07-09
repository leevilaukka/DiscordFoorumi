import React, {useEffect} from 'react';
import styled from "styled-components";
import Login from "../discord/Login";
import {useDispatch, useSelector} from "react-redux";
import Logout from "../discord/Logout";
import {Link} from "react-router-dom";
import BoardLinks from "../boards/BoardLinks";
import logo from '../../assets/Discord-Logo-Color.png'
import {getUser, postUser} from "../../actions/userActions";
import axios from "axios";
import {apiUrl} from "../../config";

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

// const SLink = styled.div`
//     a{
//         text-decoration: none;
//         transition: color .2s;
//         :hover{
//             color: #7289da
//         }
//     }
// `;
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
    const dispatch = useDispatch();

    const user = useSelector(state => state.discordUser.user);
    const userLoading = useSelector(state => state.discordUser.loading);
    const loggedIn = useSelector(state => state.loggedIn);
    const forumuser = useSelector(state => state.user.user);
    const forumLoading = useSelector(state => state.boards.loading);

    useEffect(() => {
        if (user.id) {
            dispatch(getUser(user.id));
        }
    }, [userLoading, dispatch, user.id]);
    useEffect(() => {
        if (!forumuser) {
            dispatch(postUser({
                username: user.username,
                email: user.email,
                discordid: user.id,
                avatar: user.avatar,
                discriminator: user.discriminator,
                locale: user.locale
            }))
                .then(() => {
                    const emailData = {
                        to: user.email,
                        subject: "Käyttäjä luotu!",
                        text:`Hei ${user.username}! \nLoit juuri käyttäjän DiscordFoorumille!`,
                        otag: "signup"
                    };
                    axios.post(`${apiUrl}/mail`, emailData).then(r => console.log(r))
                })
        }
    }, [dispatch, forumuser, user]);

    return (
        <NavWrapper>
            <STitle>
                <Link to="/">
                    Foorumi
                </Link>
            </STitle>
            <ProfileWrapper>
                {loggedIn && !userLoading ? <SMessage>Tervetuloa, {user.username}</SMessage> :
                    <SMessage>Kirjaudu sisään!</SMessage>}
                {loggedIn && !userLoading ? <Link to="/profile"> {user.avatar ?
                    <SProfileImg src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`} alt=""/> :
                    <SProfileImg src={logo} alt=""/>} </Link> : null}
            </ProfileWrapper>
            {loggedIn && !forumLoading ? <Logout/> : <Login/>}
            <BoardLinks/>
        </NavWrapper>
    );
};

export default Navbar;