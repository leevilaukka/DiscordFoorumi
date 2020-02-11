import {REQUEST_CREATE_THREAD,REQUEST_CREATE_THREAD_ERROR,REQUEST_CREATE_THREAD_SUCCESS} from "../actions/forumActions/threadActions";


const initialState = {
    loading: true,
    error: "",
    response: {}
};

const postThreadReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_CREATE_THREAD:
            return{
                ...state,
                loading: true
            };
        case REQUEST_CREATE_THREAD_SUCCESS:
            return {
                error: "",
                loading: false,
                response: action.response
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
export default postThreadReducer;