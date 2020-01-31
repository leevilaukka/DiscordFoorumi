import {REQUEST_USER, REQUEST_USER_ERROR, REQUEST_USER_SUCCESS} from "../actions/userActions";

const initialState = {
    loading: false,
    error: "",
    user: {},
    token: ""
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USER:
            return{
                ...state,
                loading: true,
                token: action.token
            };
        case REQUEST_USER_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                user: action.response
            };
        case REQUEST_USER_ERROR:
            return {
                ...state,
                token: "",
                loading: false,
                error: action.error
            };
        default:
            return state
    }
};
export default userReducer;