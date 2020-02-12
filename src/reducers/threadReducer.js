import {
    REQUEST_CREATE_THREAD, REQUEST_CREATE_THREAD_ERROR, REQUEST_CREATE_THREAD_SUCCESS,
    REQUEST_DELETE_THREAD, REQUEST_DELETE_THREAD_ERROR, REQUEST_DELETE_THREAD_SUCCESS,
    REQUEST_THREAD,
    REQUEST_THREAD_ERROR,
    REQUEST_THREAD_SUCCESS
} from "../actions/forumActions/threadActions";


const initialState = {
    loading: true,
    error: "",
    thread: {},
    deletedThread: {},
    postedThread: {}
};

const threadReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_THREAD:
            return{
                ...state,
                loading: true
            };
        case REQUEST_THREAD_SUCCESS:
            return {
                error: "",
                loading: false,
                thread: action.response.result
            };
        case REQUEST_THREAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case REQUEST_DELETE_THREAD:
            return{
                ...state,
                loading: true
            };
        case REQUEST_DELETE_THREAD_SUCCESS:
            return {
                error: "",
                loading: false,
                deletedThread: action.response
            };
        case REQUEST_DELETE_THREAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case REQUEST_CREATE_THREAD:
            return{
                ...state,
                loading: true
            };
        case REQUEST_CREATE_THREAD_SUCCESS:
            return {
                error: "",
                loading: false,
                postedThread: action.response
            };
        case REQUEST_CREATE_THREAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
};
export default threadReducer;