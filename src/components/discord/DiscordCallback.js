import React, {useEffect} from 'react';
import qs from 'querystring';
import btoa from 'btoa'
import axios from "axios";

require('dotenv').config();

const DiscordCallback = props => {

    useEffect(() => {
        const url = qs.parse(props.location.search, {ignoreQueryPrefix: true});
        const code = url["?code"];

        axios.get(`https://foorumiapiprod.herokuapp.com/login/${code}`)
            .then(res => {
                const token = res.token;
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