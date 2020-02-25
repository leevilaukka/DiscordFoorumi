import {
    REQUEST_DISCORD_USER,
    REQUEST_DISCORD_USER_ERROR,
    REQUEST_DISCORD_USER_SUCCESS
} from "../actions/discordActions";
import {LOGOUT} from "../actions/authActions";

const initialState = {
    loading: true,
    error: "",
    user: {},
    token: ""
};

const discordUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_DISCORD_USER:
            return {
                ...state,
                loading: true,
                token: action.userID
            };
        case REQUEST_DISCORD_USER_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                user: action.response
            };
        case REQUEST_DISCORD_USER_ERROR:
            return {
                ...state,
                token: "",
                loading: false,
                error: action.error
            };
        case LOGOUT:
            return initialState;
        default:
            return state
    }
};
export default discordUserReducer;