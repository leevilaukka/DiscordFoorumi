import axios from "axios";

export const REQUEST_THREAD = "REQUEST_THREAD";
export const REQUEST_THREAD_SUCCESS = "REQUEST_THREAD_SUCCESS";
export const REQUEST_THREAD_ERROR = "REQUEST_THREAD_ERROR";

export const REQUEST_CREATE_THREAD = "REQUEST_CREATE_THREAD";
export const REQUEST_CREATE_THREAD_SUCCESS = "REQUEST_CREATE_THREAD_SUCCESS";
export const REQUEST_CREATE_THREAD_ERROR = "REQUEST_CREATE_THREAD_ERROR";

export const REQUEST_DELETE_THREAD = "REQUEST_DELETE_THREAD";
export const REQUEST_DELETE_THREAD_SUCCESS = "REQUEST_DELETE_THREAD_SUCCESS";
export const REQUEST_DELETE_THREAD_ERROR = "REQUEST_DELETE_THREAD_ERROR";

export const REQUEST_EDIT_THREAD = "REQUEST_EDIT_THREAD";
export const REQUEST_EDIT_THREAD_SUCCESS = "REQUEST_EDIT_THREAD_SUCCESS";
export const REQUEST_EDIT_THREAD_ERROR = "REQUEST_EDIT_THREAD_ERROR";
// GET Actions
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

export const getThread = threaduri => {
    return dispatch => {
        dispatch(requestThread(threaduri));
        return axios.get(`https://foorumiapi.herokuapp.com/threads/uri/${threaduri}`)
            .then(res => dispatch(requestThreadSuccess(res.data)))
            .catch(e => dispatch(requestThreadError(e)))
    };
};

// POST Actions

export const requestCreateThread = () => {
    return {
        type: REQUEST_CREATE_THREAD
    }
};

export const requestCreateThreadSuccess = (response, author, board) => {
    return {
        type: REQUEST_CREATE_THREAD_SUCCESS,
        response,
        author,
        board
    }
};

export const requestCreateThreadError = error => {
    return {
        type: REQUEST_CREATE_THREAD_ERROR,
        error
    }
};

export const postThread = (threadData, author, board) => {
    return dispatch => {
        dispatch(requestCreateThread());
        return axios.post(`https://foorumiapi.herokuapp.com/threads/`, threadData)
            .then(res => dispatch(requestCreateThreadSuccess(res.data, author, board)))
            .catch(e => dispatch(requestCreateThreadError(e)))
    };
};

// DELETE Actions

export const requestDeleteThread = () => {
    return {
        type: REQUEST_DELETE_THREAD
    }
};

export const requestDeleteThreadSuccess = (response, threadId) => {
    return {
        type: REQUEST_DELETE_THREAD_SUCCESS,
        response,
        threadId
    }
};

export const requestDeleteThreadError = error => {
    return {
        type: REQUEST_DELETE_THREAD_ERROR,
        error
    }
};

export const deleteThread = threadId => {
    return dispatch => {
        dispatch(requestDeleteThread());
        return axios.delete(`https://foorumiapi.herokuapp.com/threads/${threadId}`)
            .then(res => dispatch(requestDeleteThreadSuccess(res.data, threadId)))
            .catch(e => dispatch(requestDeleteThreadError(e)))
    };
};

// Edit Actions

export const requestEditThread = () => {
    return {
        type: REQUEST_EDIT_THREAD
    }
};

export const requestEditThreadSuccess = (response, threadId) => {
    return {
        type: REQUEST_EDIT_THREAD_SUCCESS,
        response,
        threadId
    }
};

export const requestEditThreadError = error => {
    return {
        type: REQUEST_EDIT_THREAD_ERROR,
        error
    }
};

export const editThread = (threadId, threadData) => {
    return dispatch => {
        dispatch(requestEditThread());
        return axios.put(`https://foorumiapi.herokuapp.com/threads/${threadId}`, threadData)
            .then(res => dispatch(requestEditThreadSuccess(res.data, threadId)))
            .catch(e => dispatch(requestEditThreadError(e)))
    };
};