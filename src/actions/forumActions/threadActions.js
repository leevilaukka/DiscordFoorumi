import axios from "axios";

export const REQUEST_THREADS = "REQUEST_THREADS";
export const REQUEST_THREADS_SUCCESS = "REQUEST_THREADS_SUCCESS";
export const REQUEST_THREADS_ERROR = "REQUEST_THREADS_ERROR";

export const requestThreads = () => {
    return {
        type: REQUEST_THREADS
    }
};

export const requestThreadsSuccess = response => {
    return {
        type: REQUEST_THREADS_SUCCESS,
        response
    }
};

export const requestThreadsError = error => {
    return {
        type: REQUEST_THREADS_ERROR,
        error
    }
};

export const getThreads = () => {
    return dispatch => {
        dispatch(requestThreads());
        return axios.get(`https://foorumiapi.herokuapp.com/threads/`)
            .then(res => dispatch(requestThreadsSuccess(res.data)))
            .catch(e => dispatch(requestThreadsError(e)))
    };
};