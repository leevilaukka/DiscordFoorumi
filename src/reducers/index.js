import {combineReducers} from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import guildReducer from "./guildReducer";
import discordUserReducer from "./discordReducer";
import postReducer from "./postReducer";
import allThreadsReducer from "./allThreadsReducer";
import allBoardsReducer from "./allBoardsReducer"
import boardReducer from "./boardReducer";
import threadReducer from "./threadReducer";

const rootReducer = combineReducers({
    loggedIn: authReducer,
    user: userReducer,
    guilds: guildReducer,
    discordUser: discordUserReducer,
    articles: postReducer,
    threads: allThreadsReducer,
    thread: threadReducer,
    boards: allBoardsReducer,
    board: boardReducer
});

export default rootReducer;