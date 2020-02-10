import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBoard} from "../actions/forumActions/boardActions";
import NoAccess from "../components/navigation/NoAccess";
import CurrentBoard from "../components/boards/CurrentBoard";
import styled from "styled-components";


const NoAccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2C2F33;
    border-radius: 5px;
    padding: 1rem;
    align-items: center;
`;

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
                    <NoAccessContainer>
                        <NoAccess/>
                    </NoAccessContainer>
            }
        </div>
    );
};

export default Board;