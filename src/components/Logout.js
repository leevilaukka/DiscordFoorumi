import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {logout} from "../actions/authActions";
import Button from "./Button";

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        window.localStorage.removeItem('dToken');
        dispatch(logout());
    };

    return (
        <Button onClick={handleLogout}>Kirjaudu ulos</Button>
    );
};

export default Logout;