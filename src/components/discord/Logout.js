import React from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../../actions/authActions";
import Button from "../misc/Button";

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