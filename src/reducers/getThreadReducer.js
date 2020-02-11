import {REQUEST_THREAD,REQUEST_THREAD_ERROR,REQUEST_THREAD_SUCCESS} from "../actions/forumActions/threadActions";


const initialState = {
    loading: true,
    error: "",
    thread: {},
};

const getThreadReducer = (state = initialState, action) => {
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
        default:
            return state
    }
};
export default getThreadReducer;