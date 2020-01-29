import React, {useState} from 'react';
import axios from 'axios';
import {useSelector} from "react-redux";

const Guilds = () => {

    const guilds = useSelector(state => state.guilds.guilds);

    return (
        <div>
            {
                guilds.map(guild => (
                    <div>
                        <p>{guild.name}</p>
                        <img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={`Kanavan ${guild.name} kuvake - ${guild.icon}`}/>
                    </div>
                    
                ))
            }
        </div>
    );
};

export default Guilds;