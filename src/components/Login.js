import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "./Button";

const Login = () => {
    return (
        <Button href="https://foorumiapi.herokuapp.com/discord/login">
            <FontAwesomeIcon icon={faDiscord} /> Kirjaudu Discordilla
        </Button>
    );
};

export default Login;