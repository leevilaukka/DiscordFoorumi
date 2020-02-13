import {REQUEST_USER, REQUEST_USER_ERROR, REQUEST_USER_SUCCESS} from "../actions/userActions";
import {LOGOUT} from "../actions/authActions";

const initialState = {
    loading: false,
    error: "",
    user: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USER:
            return{
                ...state,
                loading: true,
            };
        case REQUEST_USER_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                user: action.response.response
            };
        case REQUEST_USER_ERROR:
            return {
                ...state,
                token: "",
                loading: false,
                error: action.error
            };
        case LOGOUT:
            return initialState;
        default:
            return state
    }
};
export default userReducer;