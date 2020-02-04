import {REQUEST_THREADS, REQUEST_THREADS_ERROR, REQUEST_THREADS_SUCCESS} from "../actions/forumActions/threadActions";


const initialState = {
    loading: true,
    error: "",
    threads: {},
};

const threadReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_THREADS:
            return{
                ...state,
                loading: true
            };
        case REQUEST_THREADS_SUCCESS:
            return {
                error: "",
                loading: false,
                threads: action.response
            };
        case REQUEST_THREADS_ERROR:
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