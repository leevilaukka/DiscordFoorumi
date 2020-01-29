import React, {useEffect, useState} from 'react';
import './App.css';
import AppWrapper from "./components/AppWrapper";
import Login from "./components/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DiscordCallback from "./components/DiscordCallback";
import Logout from "./components/Logout";
import {useDispatch, useSelector} from "react-redux";
import {login} from "./actions/authActions";
import Guilds from "./components/Guilds";
import Navbar from "./components/Navbar";
import {getUser} from "./actions/userActions";
import {getGuilds} from "./actions/guildActions";
import NoAccess from "./components/NoAccess";
import PrivateRoute from "./components/PrivateRoute";


function App() {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.loggedIn);
    const user = useSelector(state => state.user.user);



    useEffect(() => {
        const token = window.localStorage.getItem('dToken');
        if (token) {
            dispatch(login());
            dispatch(getUser(token));
            dispatch(getGuilds(token));
        }
    }, []);

    return (
        <Router>
            <AppWrapper className="App">
                <Route path="/">
                    <Navbar/>
                </Route>
                <PrivateRoute path="/guilds" component={Guilds}/>
                <Switch>
                    <Route path="/discord/callback" component={DiscordCallback}/>
                </Switch>
            </AppWrapper>
        </Router>
    );
}

export default App;
