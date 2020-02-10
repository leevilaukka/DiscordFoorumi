import axios from "axios";

export const REQUEST_ARTICLES = "REQUEST_ARTICLES";
export const REQUEST_ARTICLES_SUCCESS = "REQUEST_ARTICLES_SUCCESS";
export const REQUEST_ARTICLES_ERROR = "REQUEST_ARTICLES_ERROR";

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
        return axios.get(`https://foorumiapi.herokuapp.com/articles/thread/${thread}`)
            .then(res => dispatch(requestArticlesSuccess(res.data)))
            .catch(e => dispatch(requestArticlesError(e)))
    };
};