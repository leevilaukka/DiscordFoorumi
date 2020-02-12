import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Redux
import {useDispatch} from "react-redux";
import {login} from "./actions/authActions";
import {getDiscordUser} from "./actions/discordActions";
import {getAllBoards} from "./actions/forumActions/allBoardsActions";

// Components
import AppWrapper from "./components/misc/AppWrapper";
import DiscordCallback from "./components/discord/DiscordCallback";
import PrivateRoute from "./components/navigation/PrivateRoute";
import Navbar from "./components/navigation/Navbar";
import Profile from "./pages/Profile";
import PayPalForm from "./components/payment/PayPalForm";
import RegisterCallback from "./components/discord/RegisterCallback";
import BoardLinks from "./components/boards/BoardLinks";
import Loader from "./components/misc/loader/Loader";
import Board from "./pages/Board";
import Thread from "./pages/Thread";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = window.localStorage.getItem('dToken');
        if (token) {
            dispatch(login());
            dispatch(getDiscordUser(token));
        }
        dispatch(getAllBoards());
    }, [dispatch]);

    return (
        <Router>
            <AppWrapper className="App">
                <Route path="/">
                    <Navbar/>
                </Route>
                <Route path="/loader" component={Loader}/>
                <Route path="/paypal" component={PayPalForm}/>
                <PrivateRoute path="/profile" component={Profile}/>
                <Route path="/boards" component={BoardLinks}/>
                <Route path="/b/:board" exact component={Board}/>
                <Route path="/b/:board/:thread" exact component={Thread}/>
                <Switch>
                    <Route path="/discord/login/callback" component={DiscordCallback}/>
                    <Route path="/discord/register/callback" component={RegisterCallback}/>
                </Switch>
            </AppWrapper>
        </Router>
    );
}

export default App;