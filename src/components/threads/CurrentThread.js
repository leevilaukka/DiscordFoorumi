import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../actions/forumActions/postActions";
import Loader from "../misc/loader/Loader";
import styled from "styled-components";
import {formatDate} from "../misc/formatDate";
import Articles from "../articles/Articles";

const ThreadWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThreadInfo = styled.div`
  display: flex;
  background-color: #2C2F33;
  color: #FFF;
  flex-direction: column;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const CurrentThread = () => {
    const currentThread = useSelector(state => state.thread.thread);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles(currentThread._id))
    }, [currentThread]);

    const loading = useSelector(state => state.articles.loading);

    return (
        <ThreadWrapper>
            <ThreadInfo>
                {currentThread.user ? currentThread.user.username : "Anonyymi"} - {currentThread.title} - {formatDate(currentThread.date)}
            </ThreadInfo>
            {
                loading ? <Loader/> : <Articles/>
            }
        </ThreadWrapper>
    );
};

export default CurrentThread;