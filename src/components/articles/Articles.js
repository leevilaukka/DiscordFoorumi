import React from 'react';
import {useSelector} from "react-redux";
import Loader from "../misc/loader/Loader";

const Articles = () => {
    const articles = useSelector(state => state.articles.articles);
    const loading = useSelector(state => state.articles.loading);

    return (
        <div>

            {
                !loading
                &&
                articles.map(article => (
                    <p>{article.title}</p>
                )
            )}
        </div>
    );
};

export default Articles;