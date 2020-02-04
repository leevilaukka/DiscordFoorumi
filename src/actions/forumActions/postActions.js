import axios from "axios";

export const REQUEST_ARTICLES = "REQUEST_ARTICLES";
export const REQUEST_ARTICLES_SUCCESS = "REQUEST_ARTICLES_SUCCESS";
export const REQUEST_ARTICLES_ERROR = "REQUEST_ARTICLES_ERROR";

export const requestArticles = () => {
    return {
        type: REQUEST_ARTICLES
    }
};

export const requestArticlesSuccess = response => {
    return {
        type: REQUEST_ARTICLES_SUCCESS,
        response
    }
};

export const requestArticlesError = error => {
    return {
        type: REQUEST_ARTICLES_ERROR,
        error
    }
};

export const getArticles = () => {
    return dispatch => {
        dispatch(requestArticles());
        return axios.get(`https://foorumiapi.herokuapp.com/articles/`)
            .then(res => dispatch(requestArticlesSuccess(res.data)))
            .catch(e => dispatch(requestArticlesError(e)))
    };
};