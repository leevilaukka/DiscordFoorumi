import {REQUEST_DELETE_THREAD,REQUEST_DELETE_THREAD_ERROR,REQUEST_DELETE_THREAD_SUCCESS} from "../actions/forumActions/threadActions";


const initialState = {
    loading: true,
    error: "",
    response: {}
};

const deleteThreadReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_DELETE_THREAD:
            return{
                ...state,
                loading: true
            };
        case REQUEST_DELETE_THREAD_SUCCESS:
            return {
                error: "",
                loading: false,
                response: action.response
            };
        case REQUEST_DELETE_THREAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
};
export default deleteThreadReducer;