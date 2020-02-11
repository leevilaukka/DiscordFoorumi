import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {formatDate} from "../misc/formatDate";

const ThreadListWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
`;

const ThreadListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-decoration: none;
  background-color: #2C2F33;
  color:#FFF;
  margin-bottom: 1rem;
  border-radius: 5px;
  
  a:visited{
    color: #FFF;
  }
`;

const ThreadText = styled.div`
   width: 100%;
`;

const ThreadUserWrapper = styled.div`
   display: flex;
   margin-left: auto;
   flex-direction: row;
`;

const ThreadList = () => {
    const threads = useSelector(state => state.threads.threads);
    const loading = useSelector(state => state.threads.loading);
    return (
        <ThreadListWrapper>
            {
                !loading
                &&
                threads.map(thread => (
                    <ThreadListItem key={thread._id}>
                        <Link key={thread._id} to={`/b/${thread.board.boarduri}/${thread.threadUri}`}>{thread.title}</Link>
                        <ThreadText>{thread.body}</ThreadText>
                        <ThreadUserWrapper>
                           <p> {thread.user ? `${thread.user.username} - ` : "Anonyymi - "}{formatDate(thread.date)}</p>
                        </ThreadUserWrapper>
                    </ThreadListItem>

                ))
            }
        </ThreadListWrapper>
    );
};

export default ThreadList;