import React from 'react';
import {Route} from "react-router-dom";
import Guilds from "./Guilds";
import NoAccess from "./NoAccess";
import {useSelector} from "react-redux";

const PrivateRoute = props => {
    const loggedIn = useSelector(state => state.loggedIn);

    return (
        loggedIn ? <Route path={props.path} component={props.component}/> : <Route path={props.path} component={NoAccess}/>
    )
};

export default PrivateRoute;