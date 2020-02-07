import axios from "axios";

export const REQUEST_THREAD = "REQUEST_THREADS";
export const REQUEST_THREAD_SUCCESS = "REQUEST_THREADS_SUCCESS";
export const REQUEST_THREAD_ERROR = "REQUEST_THREADS_ERROR";

export const requestThread = thread => {
    return {
        type: REQUEST_THREAD,
        thread
    }
};

export const requestThreadSuccess = response => {
    return {
        type: REQUEST_THREAD_SUCCESS,
        response
    }
};

export const requestThreadError = error => {
    return {
        type: REQUEST_THREAD_ERROR,
        error
    }
};

export const getThread = thread => {
    return dispatch => {
        dispatch(requestThread(thread));
        return axios.get(`https://foorumiapi.herokuapp.com/threads/uri/${thread}`)
            .then(res => dispatch(requestThreadSuccess(res.data)))
            .catch(e => dispatch(requestThreadError(e)))
    };
};