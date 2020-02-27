import axios from "axios";

export const REQUEST_ALL_BOARDS = "REQUEST_ALL_BOARDS";
export const REQUEST_ALL_BOARDS_SUCCESS = "REQUEST_ALL_BOARDS_SUCCESS";
export const REQUEST_ALL_BOARDS_ERROR = "REQUEST_ALL_BOARDS_ERROR";

export const requestAllBoards = () => {
    return {
        type: REQUEST_ALL_BOARDS
    }
};

export const requestAllBoardsSuccess = response => {
    return {
        type: REQUEST_ALL_BOARDS_SUCCESS,
        response
    }
};

export const requestAllBoardsError = error => {
    return {
        type: REQUEST_ALL_BOARDS_ERROR,
        error
    }
};

export const getAllBoards = () => {
    return dispatch => {
        dispatch(requestAllBoards());
        return axios.get(`https://foorumiapiprod.herokuapp.com/boards/`)
            .then(res => dispatch(requestAllBoardsSuccess(res.data)))
            .catch(e => dispatch(requestAllBoardsError(e)))
    };
};