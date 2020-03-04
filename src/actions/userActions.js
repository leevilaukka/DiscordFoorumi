import axios from 'axios';

export const REQUEST_USER = "REQUEST_USER";
export const REQUEST_USER_SUCCESS = "REQUEST_USER_SUCCESS";
export const REQUEST_USER_ERROR = "REQUEST_USER_ERROR";

export const REQUEST_CREATE_USER = "REQUEST_CREATE_USER";
export const REQUEST_CREATE_USER_SUCCESS = "REQUEST_CREATE_USER_SUCCESS";
export const REQUEST_CREATE_USER_ERROR = "REQUEST_CREATE_USER_ERROR";

export const REQUEST_UPDATE_USER = "REQUEST_UPDATE_USER";
export const REQUEST_UPDATE_USER_SUCCESS = "REQUEST_UPDATE_USER_SUCCESS";
export const REQUEST_UPDATE_USER_ERROR = "REQUEST_UPDATE_USER_ERROR";




//GET user actions
export const requestUser = discordID => {
    return {
        type: REQUEST_USER,
        discordID
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

export const getUser = discordID => {
    return dispatch => {
        dispatch(requestUser(discordID));
        return axios.get(`https://foorumiapi.herokuapp.com/users/discord/users/${discordID}`)
            .then(res => dispatch(requestUserSuccess(res.data)))
            .catch(e => dispatch(requestUserError(e)))
    };
};

//POST user actions
export const requestCreateUser = () => {
    return {
        type: REQUEST_CREATE_USER
    }
};

export const requestCreateUserSuccess = response => {
    return {
        type: REQUEST_CREATE_USER_SUCCESS,
        response
    }
};

export const requestCreateUserError = error => {
    return {
        type: REQUEST_CREATE_USER_ERROR,
        error
    }
};

export const postUser = userdata => {
    return dispatch => {
        dispatch(requestCreateUser());
        return axios.post(`https://foorumiapi.herokuapp.com/users/`, userdata)
            .then(res => dispatch(requestCreateUserSuccess(res.data)))
            .catch(e => dispatch(requestCreateUserError(e)))
    };
};

// UPDATE user

export const requestUpdateUser = () => {
    return {
        type: REQUEST_CREATE_USER
    }
};

export const requestUpdateUserSuccess = (response, userID) => {
    return {
        type: REQUEST_CREATE_USER_SUCCESS,
        response,
        userID
    }
};

export const requestUpdateUserError = error => {
    return {
        type: REQUEST_CREATE_USER_ERROR,
        error
    }
};

export const updateUser = (userID, newUser) => {
    return dispatch => {
        dispatch(requestUpdateUser());
        return axios.put(`https://foorumiapi.herokuapp.com/users/${userID}`, newUser)
            .then(res => dispatch(requestUpdateUserSuccess(res.data)))
            .catch(e => dispatch(requestUpdateUserError(e)))
    };
};



