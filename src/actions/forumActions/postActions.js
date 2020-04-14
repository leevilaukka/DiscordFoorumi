import axios from "axios";
import {apiUrl} from "../../config";

export const REQUEST_ARTICLES = "REQUEST_ARTICLES";
export const REQUEST_ARTICLES_SUCCESS = "REQUEST_ARTICLES_SUCCESS";
export const REQUEST_ARTICLES_ERROR = "REQUEST_ARTICLES_ERROR";

export const REQUEST_CREATE_ARTICLES = "REQUEST_CREATE_ARTICLES";
export const REQUEST_CREATE_ARTICLES_SUCCESS = "REQUEST_CREATE_ARTICLES_SUCCESS";
export const REQUEST_CREATE_ARTICLES_ERROR = "REQUEST_CREATE_ARTICLES_ERROR";

export const requestArticles = thread => {
    return {
        type: REQUEST_ARTICLES,
        thread
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

export const getArticles = thread => {
    return dispatch => {
        dispatch(requestArticles(thread));
        return axios.get(`${apiUrl}/articles/thread/${thread}`)
            .then(res => dispatch(requestArticlesSuccess(res.data)))
            .catch(e => dispatch(requestArticlesError(e)))
    };
};

export const requestCreateArticles = () => {
    return {
        type: REQUEST_CREATE_ARTICLES
    }
};

export const requestCreateArticlesSuccess = (response, author, thread) => {
    return {
        type: REQUEST_CREATE_ARTICLES_SUCCESS,
        response,
        author,
        thread
    }
};

export const requestCreateArticlesError = error => {
    return {
        type: REQUEST_CREATE_ARTICLES_ERROR,
        error
    }
};

export const createArticle = (articleData, author, thread) => {
    return dispatch => {
        dispatch(requestCreateArticles());
        return axios.post(`${apiUrl}/articles/`, articleData)
            .then(res => dispatch(requestCreateArticlesSuccess(res.data, author, thread)))
            .catch(e => dispatch(requestCreateArticlesError(e)))
    };
};