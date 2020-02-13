import {combineReducers} from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import guildReducer from "./guildReducer";
import discordUserReducer from "./discordReducer";
import postReducer from "./postReducer";
import allBoardsReducer from "./allBoardsReducer"
import boardReducer from "./boardReducer";
import threadReducer from "./threadReducer";
import createUserReducer from "./createUserReducer";

const rootReducer = combineReducers({
    loggedIn: authReducer,
    user: userReducer,
    guilds: guildReducer,
    discordUser: discordUserReducer,
    articles: postReducer,
    threads: threadReducer,
    boards: allBoardsReducer,
    board: boardReducer,
    createUser: createUserReducer
});

export default rootReducer;