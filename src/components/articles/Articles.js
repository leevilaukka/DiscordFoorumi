import React from 'react';
import {useSelector} from "react-redux";
import styled from "styled-components";
import {formatDate} from "../../helpers/formatDate";
import ReactMarkdown from "react-markdown";
import YoutubeEmbed from "../misc/YoutubeEmbed";



const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ArticleCard = styled.div`
  width: 100%;
  background-color: #2C2F33;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
`;

const ArticleBody = styled.div`
    font-size: 1.2rem;
`;

const ArticleUser = styled.div`
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

const Articles = () => {
    const articles = useSelector(state => state.articles.articles);
    const loading = useSelector(state => state.articles.loading);

    return (
        <ArticleWrapper>
            <h4>Kommentit</h4>
            {
                !loading
                &&
                articles.map(article => (
                    <ArticleCard key={article._id}>
                        <ArticleUser><p>{article.user ? article.user.username : "Anonyymi"} - {formatDate(article.date)}</p></ArticleUser>
                        {article.embed && <YoutubeEmbed videoID={article.embed}/>}
                        <ArticleBody><ReactMarkdown source={article.body}/></ArticleBody>
                    </ArticleCard>
                )
            )}
        </ArticleWrapper>
    );
};

export default Articles;