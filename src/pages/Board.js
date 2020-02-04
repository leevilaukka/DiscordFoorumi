import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getBoard} from "../actions/forumActions/boardActions";

const Board = props => {
    const board = props.location.pathname.substring(3);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBoard(board))
    }, []);
    return (
        <div>
            <p>{board}</p>
        </div>
    );
};

export default Board;