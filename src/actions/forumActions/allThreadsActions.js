import axios from "axios";

export const REQUEST_ALL_THREADS = "REQUEST_ALL_THREADS";
export const REQUEST_ALL_THREADS_SUCCESS = "REQUEST_ALL_THREADS_SUCCESS";
export const REQUEST_ALL_THREADS_ERROR = "REQUEST_ALL_THREADS_ERROR";

export const requestAllThreads = board => {
    return {
        type: REQUEST_ALL_THREADS,
        board
    }
};

export const requestAllThreadsSuccess = response => {
    return {
        type: REQUEST_ALL_THREADS_SUCCESS,
        response
    }
};

export const requestAllThreadsError = error => {
    return {
        type: REQUEST_ALL_THREADS_ERROR,
        error
    }
};

export const getAllThreads = board => {
    return dispatch => {
        dispatch(requestAllThreads(board));
        return axios.get(`https://foorumiapiprod.herokuapp.com/threads/board/${board}`)
            .then(res => dispatch(requestAllThreadsSuccess(res.data)))
            .catch(e => dispatch(requestAllThreadsError(e)))
    };
};