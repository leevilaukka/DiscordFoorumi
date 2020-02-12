import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {formatDate} from "../misc/formatDate";
import ReactMarkdown from "react-markdown";

const ThreadListWrapper = styled.div`
  display: flex;
  align-items: center;
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
  
  a{
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: bold;
    color: #7289da;
  }
`;

const ThreadUserWrapper = styled.div`
   display: flex;
   flex-direction: row;
   margin-bottom: 1rem;
   
   p {
    color: #888;
    font-size: 0.8rem;
    font-style: italic;
   }
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
                        <Link to={`/b/${thread.board.boarduri}/${thread.threadUri}`}>{thread.title}</Link>
                        <ThreadUserWrapper>
                            <p> {thread.user ? `${thread.user.username} - ` : "Anonyymi - "}{formatDate(thread.date)}</p>
                        </ThreadUserWrapper>
                            <ReactMarkdown children={thread.body}/>
                    </ThreadListItem>
                ))
            }
        </ThreadListWrapper>
    );
};

export default ThreadList;