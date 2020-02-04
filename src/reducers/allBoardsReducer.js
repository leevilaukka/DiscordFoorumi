import {REQUEST_ALL_BOARDS, REQUEST_ALL_BOARDS_ERROR, REQUEST_ALL_BOARDS_SUCCESS} from "../actions/forumActions/allBoardsActions";


const initialState = {
    loading: true,
    error: "",
    boards: {},
};

const allBoardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ALL_BOARDS:
            return{
                ...state,
                loading: true
            };
        case REQUEST_ALL_BOARDS_SUCCESS:
            return {
                error: "",
                loading: false,
                boards: action.response
            };
        case REQUEST_ALL_BOARDS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
};
export default allBoardsReducer;