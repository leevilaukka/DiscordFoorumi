import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// Redux
import {useDispatch} from "react-redux";
import {login} from "./actions/authActions";
import {getUser} from "./actions/userActions";
import {getGuilds} from "./actions/guildActions";
import {getDiscordUser} from "./actions/discordActions";
import {getArticles} from "./actions/forumActions/postActions";
import {getThreads} from "./actions/forumActions/threadActions";
import {getAllBoards} from "./actions/forumActions/allBoardsActions";

// Components
import AppWrapper from "./components/AppWrapper";
import DiscordCallback from "./components/Discord/DiscordCallback";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import PayPalForm from "./components/PayPalForm";
import RegisterCallback from "./components/Discord/RegisterCallback";
import BoardLinks from "./components/BoardLinks";
import Loader from "./components/Loader";
import Board from "./pages/Board";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = window.localStorage.getItem('dToken');
        if (token) {
            dispatch(login());
            dispatch(getDiscordUser(token));
            dispatch(getGuilds(token));
            dispatch(getArticles());
            dispatch(getThreads());
            dispatch(getAllBoards());
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
                <Route path="/boards" component={BoardLinks}/>
                <Route path="/b/:board" component={Board}/>
                <Switch>
                    <Route path="/discord/login/callback" component={DiscordCallback}/>
                    <Route path="/discord/register/callback" component={RegisterCallback}/>
                </Switch>
            </AppWrapper>
        </Router>
    );
}

export default App;
