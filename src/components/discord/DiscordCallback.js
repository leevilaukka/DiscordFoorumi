import React, {useEffect} from 'react';
import qs from 'querystring';
import btoa from 'btoa'
import axios from "axios";


const DiscordCallback = props => {

    useEffect(() => {
        const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
        const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
        const redirect = encodeURIComponent(`http://localhost:3000/discord/login/callback`);
        console.log(CLIENT_ID);
        const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

        const url = qs.parse(props.location.search, {ignoreQueryPrefix: true});
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