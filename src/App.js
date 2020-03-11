import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactGA from 'react-ga';


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
import Footer from "./components/misc/footer/Footer";
import Rickroll from "./components/misc/Rickroll";

function App() {

    // Google Analytics
    ReactGA.initialize('UA-159660295-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

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
                <Navbar/>
                <Route path="/" exact component={Rickroll}/>
                <Route path="/loader" component={Loader}/>
                <Route path="/paypal" component={PayPalForm}/>
                <PrivateRoute path="/profile" component={Profile}/>
                <Route path="/b/:board" exact component={Board}/>
                <Route path="/b/:board/:thread" exact component={Thread}/>
                <Switch>
                    <Route path="/discord/login/callback" component={DiscordCallback}/>
                    <Route path="/discord/register/callback" component={RegisterCallback}/>
                </Switch>
                <Footer/>
            </AppWrapper>
        </Router>
    );
}

export default App;