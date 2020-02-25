import React from 'react';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "../misc/Button";

const Login = () => {
    return (
        <Button href="https://foorumiapi.herokuapp.com/discord/login/">
            <FontAwesomeIcon icon={faDiscord} /> Kirjaudu Discordilla
        </Button>
    );
};

export default Login;