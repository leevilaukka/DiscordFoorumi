import React from 'react';
import {useSelector} from "react-redux";
import Loader from "../misc/loader/Loader";
import {Link} from "react-router-dom";

const ThreadList = () => {
    const threads = useSelector(state => state.threads.threads);
    const loading = useSelector(state => state.threads.loading);
    return (
        <div>
            {
                !loading
                &&
                threads.map(thread => (
                    <Link to={`/b/${thread.board.boarduri}/${thread.threadUri}`}>{thread.title}</Link>
                ))
            }
        </div>
    );
};

export default ThreadList;