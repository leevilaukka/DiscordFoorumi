import {REQUEST_CREATE_USER, REQUEST_CREATE_USER_ERROR, REQUEST_CREATE_USER_SUCCESS} from "../actions/userActions";


const initialState = {
    loading: true,
    error: "",
    response: {}
};

const createUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_CREATE_USER:
            return {
                ...state,
                loading: true
            };
        case REQUEST_CREATE_USER_SUCCESS:
            return {
                error: "",
                loading: false,
                response: action.response
            };
        case REQUEST_CREATE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
};
export default createUserReducer;