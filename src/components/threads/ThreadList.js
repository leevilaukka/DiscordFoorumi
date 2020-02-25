import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {formatDate} from "../../helpers/formatDate";
import ReactMarkdown from "react-markdown";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faPen} from "@fortawesome/free-solid-svg-icons";
import {deleteThread} from "../../actions/forumActions/threadActions";
import Loader from "../misc/loader/Loader";
import logo from "../../assets/Discord-Logo-Color.png"
import YoutubeEmbed from "../misc/YoutubeEmbed";
import EditThread from "../forms/EditThread";

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
   align-items: center;
   
   p {
    color: #888;
    font-size: 0.8rem;
    font-style: italic;
   }
`;

const ThreadAvatar = styled.img`
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
`;


const ThreadList = () => {

    let [open, setOpen] = useState(false);

    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    let [embed, setEmbed] = useState("");
    let [threadId, setThreadId] = useState("");

    const dispatch = useDispatch();

    const handleDelete = e => {
        // const threadId = e.target.value;
        dispatch(deleteThread(e.target.value));
    };

    const handleEdit = e => {
        e.preventDefault();
        setOpen(!open);
        const id = e.target.getAttribute("data");

        const threadData = threads.find(thread => {
            return thread._id === id;
        });
        setTitle(threadData.title);
        setBody(threadData.body);
        setEmbed(threadData.embed);
        setThreadId(id);
    };

    const toggleEdit = e => {
        if (e.target.id === "backdrop") {
            setOpen(!open);
            setTitle("");
            setBody("");
            setEmbed("");
            setThreadId("");
        }
    };

    const afterSubmit = () => {
        setOpen(!open);
        setTitle("");
        setBody("");
        setEmbed("");
        setThreadId("");
    };


    const threads = useSelector(state => state.threads.threads);
    const loading = useSelector(state => state.threads.loading);
    const userId = useSelector(state => state.user.user._id);
    const createdLoading = useSelector(state => state.threads.createLoading);

    return (
        <ThreadListWrapper>
            {
                !loading
                    ?
                    threads.map(thread => (
                        <ThreadListItem key={thread._id}>
                            <Link to={`/b/${thread.board.boarduri}/${thread.threadUri}`}>{thread.title}</Link>
                            <ThreadUserWrapper>
                                <ThreadAvatar
                                    src={thread.user ? thread.user.avatar ? `https://cdn.discordapp.com/avatars/${thread.user.discordid}/${thread.user.avatar}.jpg` : logo : logo}/>
                                <p> {!createdLoading ? thread.user ? ` ${thread.user.username} - ` : "Anonyymi - " : "Ladataan..."}{formatDate(thread.date)}</p>
                            </ThreadUserWrapper>
                            {thread.embed && <YoutubeEmbed videoID={thread.embed}/>}
                            <ReactMarkdown children={thread.body} escapeHtml={false}/>
                            {
                                // TODO: Check for anonym IP address to allow edit/delete
                                thread.user &&
                                (thread.user._id === userId)
                                &&
                                <ActionsWrapper>
                                    <EditButton
                                        data={thread._id}
                                        title="Muokkaa"
                                        onClick={handleEdit}
                                    >
                                        <Icon icon={faPen} size="lg"/>
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
                    :
                    <Loader/>
            }
            <EditThread
                open={open}
                title={title}
                body={body}
                embed={embed}
                threadId={threadId}
                onBackdropClick={toggleEdit}
                afterSubmit={afterSubmit}
            />
        </ThreadListWrapper>

    );
};

export default ThreadList;