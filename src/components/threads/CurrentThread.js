import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../actions/forumActions/postActions";
import Loader from "../misc/loader/Loader";
import styled from "styled-components";
import {formatDate} from "../../helpers/formatDate";
import Articles from "../articles/Articles";
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import logo from "../../assets/Discord-Logo-Color.png";
import YoutubeEmbed from "../misc/YoutubeEmbed";
import CreateArticle from "../forms/CreateArticle";
import ShareButton from "../misc/ShareButton";

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
  flex-wrap: wrap;
`;

const ThreadTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: bold;
    color: #7289da;
`;

const ThreadBody = styled.div`
  font-size: 1.2rem;
`;

const ThreadBodyText = styled.div`
  margin-bottom: 1rem;
`;

const ThreadButtonWrapper = styled.div`
  display: flex;
  margin-left: auto;
  float: right;
  background-color: #23272f;
  padding: .2rem;
  border-radius: 5px;
`;

const Timestamp = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
    p {
        color: #888;
        font-size: 0.8rem;
        font-style: italic;    
    }
`;
const ThreadAvatar = styled.img`
  height: 32px;
  border-radius: 50%;
  margin-right: 5px;
`;


const CurrentThread = () => {
    const currentThread = useSelector(state => state.threads.thread);
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

                <Timestamp><ThreadAvatar
                    src={currentThread.user ? currentThread.user.avatar ? `https://cdn.discordapp.com/avatars/${currentThread.user.discordid}/${currentThread.user.avatar}.jpg` : logo : logo}/>
                    <p>{currentThread.user ? currentThread.user.username : "Anonyymi"} - {formatDate(currentThread.date)}</p>
                </Timestamp>

                <ThreadBody>
                    <ThreadBodyText><ReactMarkdown children={currentThread.body} escapeHtml={false}/></ThreadBodyText>
                    {currentThread.embed && <YoutubeEmbed videoID={currentThread.embed}/>}
                </ThreadBody>
                { navigator.share &&
                    <ThreadButtonWrapper>
                        <ShareButton title={`${currentThread.board.title} - ${currentThread.title}`} text={currentThread.body} url={window.location.href} />
                    </ThreadButtonWrapper>
                }


            </ThreadInfo>
            <CreateArticle/>
            {
                loading ? <Loader/> : <Articles/>
            }
        </ThreadWrapper>
    );
};

export default CurrentThread;