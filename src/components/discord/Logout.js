import React from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../../actions/authActions";
import Button from "../misc/Button";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";


const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        window.localStorage.removeItem('dToken');
        dispatch(logout());
    };

    return (
        <Button onClick={handleLogout}>Kirjaudu ulos <Icon icon={faSignOutAlt}/></Button>
    );
};

export default Logout;