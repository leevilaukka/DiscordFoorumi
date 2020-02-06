import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import Loader from "../misc/loader/Loader";
import {getGuilds} from "../../actions/guildActions";

const GuildWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const GuildCard = styled.div`
    min-width: 25%;
    padding: 1rem;
    width: 25%;
    
    @media (max-width: 992px) {
      min-width: 50%;
    }
    
    @media (max-width: 576px) {
      min-width: 100%;
    }
    
    .inner {
        border-radius: 5px;
        background-color: #2c2f33;
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        
        p {
            word-break: break-word;
        }
    }
`;

const GuildImg = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    transition: border-radius .2s;
    margin-left: auto;
    
    :hover{
        border-radius: 25%;
    }
`;

const DefaultGuildImg = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #7289da;
    transition: border-radius .2s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    
    h3 {
        font-size: 2rem;
        user-select: none;
    }
    
    :hover{
        border-radius: 25%;
    }
`;

const Title = styled.h3`
    min-width: 100%;
    padding: 1rem;
`;

const ErrorMessage = styled.h2`
    color: #ff0000;
`;

const Guilds = () => {

    const dispatch = useDispatch();
    const token = window.localStorage.getItem('dToken');

    useEffect(() =>{
        dispatch(getGuilds(token));
    }, []);

    const guilds = useSelector(state => state.guilds.guilds);
    const loading = useSelector(state => state.guilds.loading);
    const error = useSelector(state => state.guilds.error);

    return (
        <GuildWrapper>
            <Title>Palvelimet</Title>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
            {
                loading ? <Loader/> : guilds.map(guild => (
                    <GuildCard key={guild.id}>
                        <div className="inner">
                            <p>{guild.name}</p>
                            {
                                guild.icon
                                    ?
                                    <GuildImg src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={`Kanavan ${guild.name} kuvake - ${guild.icon}`}/>
                                    :
                                    <DefaultGuildImg><h3>{guild.name.charAt(0)}</h3></DefaultGuildImg>
                            }
                        </div>
                    </GuildCard>
                    
                ))
            }
        </GuildWrapper>
    );
};

export default Guilds;