import {REQUEST_GUILDS, REQUEST_GUILDS_ERROR, REQUEST_GUILDS_SUCCESS} from "../actions/guildActions";

const initialState = {
    loading: false,
    error: "",
    guilds: [],
};

const guildReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_GUILDS:
            return {
                ...state,
                loading: true,
            };
        case REQUEST_GUILDS_SUCCESS:
            return {
                error: "",
                loading: false,
                guilds: action.response
            };
        case REQUEST_GUILDS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
};
export default guildReducer;