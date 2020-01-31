import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Redux
import {useDispatch, useSelector} from "react-redux";
import {login} from "./actions/authActions";
import {getUser} from "./actions/userActions";
import {getGuilds} from "./actions/guildActions";

// Components
import AppWrapper from "./components/AppWrapper";
import Guilds from "./components/User/Guilds";
import DiscordCallback from "./components/Discord/DiscordCallback";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import PayPalForm from "./components/PayPalForm";
import RegisterCallback from "./components/Discord/RegisterCallback";


function App() {
    const dispatch = useDispatch();

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
                <Route path="/paypal" component={PayPalForm}/>
                <PrivateRoute path="/profile" component={Profile}/>
                <Switch>
                    <Route path="/discord/login/callback" component={DiscordCallback}/>
                    <Route path="/discord/register/callback" component={RegisterCallback}/>
                </Switch>
            </AppWrapper>
        </Router>
    );
}

export default App;
