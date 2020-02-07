import React, {useEffect} from 'react';
import {getThread} from "../actions/forumActions/threadActions";
import {useDispatch, useSelector} from "react-redux";
import NoAccess from "../components/navigation/NoAccess";
import Loader from "../components/misc/loader/Loader";

const Thread = props => {
    const board = props.location.pathname.split("/")[2];
    const threaduri = props.location.pathname.split("/")[3];


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getThread(threaduri))
    }, [threaduri]);

    const currentThread = useSelector(state => state.thread.thread);
    const loading = useSelector(state => state.thread.loading);

    const threadCheck = () => {
        if(!loading){
            if(currentThread && board === currentThread.board.boarduri){
                return <p> {currentThread.title} - {currentThread.body}</p>
            } else {
                return <NoAccess/>
            }
        }else{
            return <Loader/>
        }
    };

    return (
      threadCheck()
    )
};

export default Thread;