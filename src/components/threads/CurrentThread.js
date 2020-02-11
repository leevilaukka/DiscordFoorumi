import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../actions/forumActions/postActions";
import Loader from "../misc/loader/Loader";
import styled from "styled-components";
import {formatDate} from "../misc/formatDate";
import Articles from "../articles/Articles";
import {Link} from "react-router-dom";

const ThreadWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2C2F33;
    border-radius: 5px;
    padding: 1rem;
    align-items: center;
    color: #fff;
    margin-bottom: 1rem;
    
    a:visited{
      color: #fff;
    }
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

const ThreadTitle = styled.h2`
   
`;

const ThreadBody = styled.p`
  font-size: 1.2rem;
`;

const CurrentThread = () => {
    const currentThread = useSelector(state => state.thread.thread);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles(currentThread._id))
    }, [currentThread, dispatch]);

    const loading = useSelector(state => state.articles.loading);

    return (
        <ThreadWrapper>
            <BoardContainer>
                <Link to={`/b/${currentThread.board.boarduri}`}>{currentThread.board.title}</Link>
            </BoardContainer>
            <ThreadInfo>
                <ThreadTitle>
                    {currentThread.title}
                </ThreadTitle>
                <ThreadBody>
                    {currentThread.body}
                </ThreadBody>
                {currentThread.user ? currentThread.user.username : "Anonyymi"} - {formatDate(currentThread.date)}
            </ThreadInfo>
            {
                loading ? <Loader/> : <Articles/>
            }
        </ThreadWrapper>
    );
};

export default CurrentThread;