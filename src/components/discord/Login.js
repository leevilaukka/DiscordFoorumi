import React from 'react';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "../misc/Button";
import {apiUrl} from "../../config";

const Login = () => {
    return (
        <Button href={`${apiUrl}/discord/login/`}>
            <FontAwesomeIcon icon={faDiscord}/> Kirjaudu Discordilla
        </Button>
    );
};

export default Login;