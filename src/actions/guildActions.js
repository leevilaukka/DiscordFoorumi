import axios from 'axios';

export const REQUEST_GUILDS = "REQUEST_GUILDS";
export const REQUEST_GUILDS_SUCCESS = "REQUEST_GUILDS_SUCCESS";
export const REQUEST_GUILDS_ERROR = "REQUEST_GUILDS_ERROR";

export const requestGuilds = () => {
    return {
        type: REQUEST_GUILDS,
    }
};

export const requestGuildsSuccess = response => {
    return {
        type: REQUEST_GUILDS_SUCCESS,
        response
    }
};

export const requestGuildsError = error => {
    return {
        type: REQUEST_GUILDS_ERROR,
        error
    }
};

export const getGuilds = token => {
    return dispatch => {
        dispatch(requestGuilds(token));
        return axios.get(`https://foorumiapiprod.herokuapp.com/discord/user/guilds/${token}`)
            .then(res => dispatch(requestGuildsSuccess(res.data)))
            .catch(e => dispatch(requestGuildsError(e)))
    };
};