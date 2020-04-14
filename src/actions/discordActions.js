import axios from 'axios';
import {apiUrl} from "../config";

export const REQUEST_DISCORD_USER = "REQUEST_DISCORD_USER";
export const REQUEST_DISCORD_USER_SUCCESS = "REQUEST_DISCORD_USER_SUCCESS";
export const REQUEST_DISCORD_USER_ERROR = "REQUEST_DISCORD_USER_ERROR";

export const requestDiscordUser = userID => {
    return {
        type: REQUEST_DISCORD_USER,
        userID
    }
};

export const requestDiscordUserSuccess = response => {
    return {
        type: REQUEST_DISCORD_USER_SUCCESS,
        response
    }
};

export const requestDiscordUserError = error => {
    return {
        type: REQUEST_DISCORD_USER_ERROR,
        error
    }
};

export const getDiscordUser = token => {
    return dispatch => {
        dispatch(requestDiscordUser(token));
        return axios.get(`${apiUrl}/discord/user/${token}`)
            .then(res => dispatch(requestDiscordUserSuccess(res.data)))
            .catch(e => dispatch(requestDiscordUserError(e)))
    };
};