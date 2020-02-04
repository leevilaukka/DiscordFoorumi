import axios from 'axios';

export const REQUEST_USER = "REQUEST_USER";
export const REQUEST_USER_SUCCESS = "REQUEST_USER_SUCCESS";
export const REQUEST_USER_ERROR = "REQUEST_USER_ERROR";

export const requestUser = token => {
    return {
        type: REQUEST_USER,
        token
    }
};

export const requestUserSuccess = response => {
    return {
        type: REQUEST_USER_SUCCESS,
        response
    }
};

export const requestUserError = error => {
    return {
        type: REQUEST_USER_ERROR,
        error
    }
};

export const getUser = userID => {
    return dispatch => {
        dispatch(requestUser(userID));
        return axios.get(`https://foorumiapi.herokuapp.com/discord/users/${userID}`)
            .then(res => dispatch(requestUserSuccess(res.data)))
            .catch(e => dispatch(requestUserError(e)))
    };
};



