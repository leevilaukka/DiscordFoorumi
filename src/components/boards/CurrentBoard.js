import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllThreads} from "../../actions/forumActions/allThreadsActions";
import ThreadList from "../threads/ThreadList";
import Loader from "../misc/loader/Loader";
import styled from "styled-components";
import CreateThread from "../forms/CreateThread";

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2C2F33;
    border-radius: 5px;
    padding: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    
    p{
        margin-bottom: 1rem;
        font-weight: bold;
    }
`;

const CurrentBoard = props => {
    const dispatch = useDispatch();

    const board = useSelector(state => state.board.board);
    const loading = useSelector(state => state.board.loading);

    useEffect(() => {
        dispatch(getAllThreads(board._id));
    }, [dispatch, board._id]);


    return (
        <div>
            <BoardContainer>
                <p>{board.title}</p>
                <CreateThread/>
            </BoardContainer>
            {
                !loading
                ?
                <ThreadList/>
                    :
                    <Loader/>
            }

        </div>
    );
};

export default CurrentBoard;