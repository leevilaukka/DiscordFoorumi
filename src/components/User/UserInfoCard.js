import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

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
`;
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

const UserImage = styled.img`
    border-radius: 50%;  
`;

const UserName = styled.h1`
    align-self: center;
`;

const UserEmail = styled.p`
    color: #aaa;
    font-style: italic;
`;

const UserLocale = styled.p`
    
`;

const UserInfoCard = () => {
    const user = useSelector(state => state.user.user);

    return (
        <UserWrapper>
            <UserCard>
                <UserImage src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg`}/>
                <UserInfo>
                    <UserName>{user.username}#{user.discriminator}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                    <UserLocale>{user.locale}</UserLocale>
                </UserInfo>
            </UserCard>
        </UserWrapper>
        );
};

export default UserInfoCard;