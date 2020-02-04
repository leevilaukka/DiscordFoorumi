import axios from 'axios';

export const REQUEST_BOARD = "REQUEST_BOARD";
export const REQUEST_BOARD_SUCCESS = "REQUEST_BOARD_SUCCESS";
export const REQUEST_BOARD_ERROR = "REQUEST_BOARD_ERROR";

export const requestBoard = board => {
    return {
        type: REQUEST_BOARD,
        board
    }
};

export const requestBoardSuccess = response => {
    return {
        type: REQUEST_BOARD_SUCCESS,
        response
    }
};

export const requestBoardError = error => {
    return {
        type: REQUEST_BOARD_ERROR,
        error
    }
};

export const getBoard = board => {
    return dispatch => {
        dispatch(requestBoard(board));
        return axios.get(`https://foorumiapi.herokuapp.com/boards/b/${board}`)
            .then(res => dispatch(requestBoardSuccess(res.data)))
            .catch(e => dispatch(requestBoardError(e)))
    };
};
