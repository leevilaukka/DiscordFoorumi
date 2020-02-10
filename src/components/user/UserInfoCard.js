import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import logo from "../../assets/Discord-Logo-Color.png"

const UserWrapper = styled.div`
    padding: 1rem;
`;

const UserCard = styled.div`
    width: 100%;
    background-color: #2c2f33;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    
    @media (max-width: 450px) {
        width: 100%;
        align-items: center;
    }
`;
const UserImageWrapper = styled.div`
    display: flex;
    
    @media (max-width: 450px) {
        width: 100%;
    }
`;
const UserImage = styled.img`
    border-radius: 50%;  
    
    @media (max-width: 450px) {
        max-width: 50%;
        margin: auto;
    }
`;

const UserName = styled.h1`
    align-self: center;
    
    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
    
    @media (max-width: 450px) {
        font-size: 0.9rem;
        
    }
`;

const UserEmail = styled.p`
    color: #aaa;
    font-style: italic;
    
    @media (max-width: 450px) {
        font-size: 0.8rem;
    }
`;

const UserLocale = styled.p`
    @media (max-width: 450px) {
        font-size: 0.8rem;
    }
`;
const ButtonWrapper = styled.div`
    display: flex;
    margin-left: auto;
    @media (max-width: 750px) {
        width: 100%;
        align-items: center;
    }
`;

const EditButton = styled.a`
    background-color: #7289da;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color .2s;
    font-size: 1.2rem;
    padding: .75rem .5rem;
    text-decoration: none;
    margin-left: auto;
    margin-right: 1rem;
    
    @media (max-width: 750px) {
        margin: 1rem auto auto;
    }
    :hover {
        background-color: #99AAB5;
        cursor: pointer;
    }
`;

const UserInfoCard = () => {
    const user = useSelector(state => state.discordUser.user);

    return (
        <UserWrapper>
            <UserCard>
                <UserImageWrapper>
                    {user.avatar ? <UserImage src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg`}/> : <UserImage src={logo} alt=""/>}
                </UserImageWrapper>
                <UserInfo>
                    <UserName>{user.username}#{user.discriminator}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                    <UserLocale>{user.locale}</UserLocale>
                </UserInfo>
                <ButtonWrapper>
                    <EditButton>Muokkaa</EditButton>
                </ButtonWrapper>
            </UserCard>
        </UserWrapper>
        );
};

export default UserInfoCard;