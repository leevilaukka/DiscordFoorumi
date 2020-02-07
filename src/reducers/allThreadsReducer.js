import {REQUEST_ALL_THREADS,REQUEST_ALL_THREADS_ERROR,REQUEST_ALL_THREADS_SUCCESS} from "../actions/forumActions/allThreadsActions";


const initialState = {
    loading: true,
    error: "",
    threads: {},
};

const allThreadsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ALL_THREADS:
            return{
                ...state,
                loading: true
            };
        case REQUEST_ALL_THREADS_SUCCESS:
            return {
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
export default allThreadsReducer;