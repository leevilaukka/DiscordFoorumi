import {REQUEST_BOARD, REQUEST_BOARD_ERROR, REQUEST_BOARD_SUCCESS} from "../actions/forumActions/boardActions";

const initialState = {
    loading: true,
    error: "",
    board: {},
};

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_BOARD:
            return {
                ...state,
                loading: true
            };
        case REQUEST_BOARD_SUCCESS:
            return {
                error: "",
                loading: false,
                board: action.response.result
            };
        case REQUEST_BOARD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
};
export default boardReducer;