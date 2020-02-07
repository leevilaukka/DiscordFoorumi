import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllThreads} from "../../actions/forumActions/allThreadsActions";
import ThreadList from "../threads/ThreadList";
import Loader from "../misc/loader/Loader";

const CurrentBoard = props => {
    const dispatch = useDispatch();

    const board = useSelector(state => state.board.board);
    const loading = useSelector(state => state.board.loading);

    useEffect(() => {
        dispatch(getAllThreads(board._id));
    }, []);


    return (
        <div>
            <p>{board.title}</p>
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