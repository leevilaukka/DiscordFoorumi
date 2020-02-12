import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {formatDate} from "../misc/formatDate";
import ReactMarkdown from "react-markdown";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faEdit} from "@fortawesome/free-solid-svg-icons";
import {deleteThread} from "../../actions/forumActions/threadActions";

const ThreadListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Trash = styled.button`
   border:none;
   background: none;
   padding: 5px;
   
   :hover{
      cursor: pointer;
   }
   
   svg {
      color: #7289da;
      transition: color .2s;
      pointer-events: none;
   }
   
   :hover svg {
      color: #AA0000;
   }
`;

const EditButton = styled.button`
   border:none;
   background: none;
   padding: 5px;
   
   :hover{
      cursor: pointer;
   }
   
   svg {
      color: #7289da;
      transition: color .2s;
      pointer-events: none;
   }
   
   :hover svg {
      color: #00AA00;
   }
`;

const ActionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    padding: 5px;
    justify-content: flex-end;
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
    const dispatch = useDispatch();

    const handleDelete = e => {
        // const threadId = e.target.value;
        dispatch(deleteThread(e.target.value));
    };

    const threads = useSelector(state => state.threads.threads);
    const loading = useSelector(state => state.threads.loading);
    const userId = useSelector(state => state.user.user._id);

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

                            {
                                (thread.user._id === userId)
                                &&
                                <ActionsWrapper>
                                    <EditButton
                                        title="Muokkaa"
                                    >
                                        <Icon icon={faEdit} size="lg"/>
                                    </EditButton>
                                    <Trash
                                        title="Poista"
                                        value={thread._id}
                                        onClick={handleDelete}
                                    >
                                        <Icon icon={faTrashAlt} size="lg"/>
                                    </Trash>
                                </ActionsWrapper>
                            }


                    </ThreadListItem>
                ))
            }
        </ThreadListWrapper>
    );
};

export default ThreadList;