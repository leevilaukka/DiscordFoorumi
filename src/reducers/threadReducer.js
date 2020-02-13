import {
    REQUEST_CREATE_THREAD, REQUEST_CREATE_THREAD_ERROR, REQUEST_CREATE_THREAD_SUCCESS,
    REQUEST_DELETE_THREAD, REQUEST_DELETE_THREAD_ERROR, REQUEST_DELETE_THREAD_SUCCESS,
    REQUEST_THREAD,
    REQUEST_THREAD_ERROR,
    REQUEST_THREAD_SUCCESS
} from "../actions/forumActions/threadActions";
import {
    REQUEST_ALL_THREADS,
    REQUEST_ALL_THREADS_ERROR,
    REQUEST_ALL_THREADS_SUCCESS
} from "../actions/forumActions/allThreadsActions";


const initialState = {
    loading: true,
    singleThreadLoading: true,
    createLoading: false,
    error: "",
    thread: {},
    deletedThread: {},
    postedThread: {},
    threads: {}
};

const threadReducer = (state = initialState, action) => {
    switch (action.type) {

        //REQUEST SINGLE THREAD
        case REQUEST_THREAD:
            return{
                ...state,
                singleThreadLoading: true
            };
        case REQUEST_THREAD_SUCCESS:
            return {
                ...state,
                error: "",
                singleThreadLoading: false,
                thread: action.response.result
            };
        case REQUEST_THREAD_ERROR:
            return {
                ...state,
                singleThreadLoading: false,
                error: action.error
            };

            // DELETE THREAD
        case REQUEST_DELETE_THREAD:
            return{
                ...state,
                loading: true
            };
        case REQUEST_DELETE_THREAD_SUCCESS:
            let newThreads = state.threads.filter(val => val._id !== action.threadId);

            return {
                ...state,
                error: "",
                threads: newThreads,
                loading: false,
                deletedThread: action.response
            };
        case REQUEST_DELETE_THREAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };

            // CREATE THREAD
        case REQUEST_CREATE_THREAD:
            return{
                ...state,
                createLoading: true
            };
        case REQUEST_CREATE_THREAD_SUCCESS:
            let updatedThreads = [
                {
                    ...action.response.thread,
                    user: action.author
                },
                ...state.threads
            ];

            return {
                ...state,
                error: "",
                createLoading: false,
                postedThread: action.response.thread,
                threads: updatedThreads
            };
        case REQUEST_CREATE_THREAD_ERROR:
            return {
                ...state,
                createLoading: false,
                error: action.error
            };
            // ALL THREADS
        case REQUEST_ALL_THREADS:
            return{
                ...state,
                loading: true
            };
        case REQUEST_ALL_THREADS_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                threads: action.response
            };
        case REQUEST_ALL_THREADS_ERROR:
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