import React, {useEffect} from 'react';
import qs from 'querystring';
import axios from "axios";


const DiscordCallback = props => {

    useEffect(() => {
        const url = qs.parse(props.location.search, {ignoreQueryPrefix: true});
        const code = url["?code"];

        axios.get(`https://foorumiapi.herokuapp.com/discord/login/${code}`)
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