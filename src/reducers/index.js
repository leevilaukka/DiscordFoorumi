import {combineReducers} from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import guildReducer from "./guildReducer";

const rootReducer = combineReducers({
    loggedIn: authReducer,
    user: userReducer,
    guilds: guildReducer
});

export default rootReducer;