import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBoard} from "../actions/forumActions/boardActions";
import NoAccess from "../components/navigation/NoAccess";
import CurrentBoard from "../components/boards/CurrentBoard";

const Board = props => {
    const board = props.location.pathname.substring(3);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBoard(board))
    }, [board]);

    const currentBoard = useSelector(state => state.board.board);
    const loading = useSelector(state => state.board.loading);

    return (
        <div>
            {
                currentBoard
                    ?
                        !loading
                            &&
                        <CurrentBoard/>
                    :
                    <NoAccess/>
            }
        </div>
    );
};

export default Board;