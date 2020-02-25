import React, {useEffect} from 'react';
import qs from 'querystring';
import btoa from 'btoa'
import axios from "axios";

require('dotenv').config();

const DiscordCallback = props => {

    useEffect(() => {
        const CLIENT_ID = "669505696991150085";
        const CLIENT_SECRET = "cBvSc7LP5MYlF4cptOQE5zUrW_AaQJBb";
        const redirect = encodeURIComponent(`http://localhost:3000/discord/login/callback`);

        const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

        const url = qs.parse(props.location.search, { ignoreQueryPrefix: true });
        const code = url["?code"];

        axios(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Basic ${creds}`,
                },
            })
            .then(res => {
                const token = res.data.access_token;
                window.localStorage.setItem('dToken', token);
                window.location.replace('/');
            })
            .catch(e => console.error(e))
    });

    return (
        <div>

        </div>
    );
};

export default DiscordCallback;