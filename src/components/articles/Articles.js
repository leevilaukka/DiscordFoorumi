import React from 'react';
import {useSelector} from "react-redux";
import styled from "styled-components";
import {formatDate} from "../misc/formatDate";



const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticleCard = styled.div`
  width: 100%;
  background-color: #2C2F33;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
`;
const ArticleTitle = styled.h2`

`;

const ArticleBody = styled.p`
  
`;

const ArticleUser = styled.p`
  
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
                    <ArticleCard>
                        <ArticleTitle>{article.title}</ArticleTitle>
                        <ArticleBody>{article.body}</ArticleBody>
                        <ArticleUser>{article.user ? article.user.username : "Anonyymi"} - {formatDate(article.date)}</ArticleUser>
                    </ArticleCard>
                )
            )}
        </ArticleWrapper>
    );
};

export default Articles;