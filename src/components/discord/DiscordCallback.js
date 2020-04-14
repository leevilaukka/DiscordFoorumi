import React, {useEffect} from 'react';
import qs from 'querystring';
import axios from "axios";
import {apiUrl} from "../../config";


const DiscordCallback = props => {

    useEffect(() => {
        const url = qs.parse(props.location.search, {ignoreQueryPrefix: true});
        const code = url["?code"];

        axios.get(`${apiUrl}/discord/login/token/${code}`)
            .then(res => {
                const token = res.data.token;
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