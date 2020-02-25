import React, {useEffect} from 'react';
import {getThread} from "../actions/forumActions/threadActions";
import {useDispatch, useSelector} from "react-redux";
import NoAccess from "../components/navigation/NoAccess";
import Loader from "../components/misc/loader/Loader";
import CurrentThread from "../components/threads/CurrentThread";
import styled from "styled-components";

const NoAccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2C2F33;
    border-radius: 5px;
    padding: 1rem;
    align-items: center;
`;

const Thread = props => {
    const board = props.location.pathname.split("/")[2];
    const threaduri = props.location.pathname.split("/")[3];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getThread(threaduri))
    }, [threaduri, dispatch]);

    const currentThread = useSelector(state => state.threads.thread);
    const loading = useSelector(state => state.threads.singleThreadLoading);

    const threadCheck = () => {
        if (!loading) {
            if (currentThread && board === currentThread.board.boarduri) {
                return <CurrentThread/>
            } else {
                return (
                    <NoAccessContainer>
                        <NoAccess/>
                    </NoAccessContainer>
                )
            }
        } else {
            return <Loader/>
        }
    };

    return (
        threadCheck()
    )
};

export default Thread;