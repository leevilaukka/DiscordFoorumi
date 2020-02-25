import {
    REQUEST_ARTICLES,
    REQUEST_ARTICLES_ERROR,
    REQUEST_ARTICLES_SUCCESS,
    REQUEST_CREATE_ARTICLES,
    REQUEST_CREATE_ARTICLES_ERROR,
    REQUEST_CREATE_ARTICLES_SUCCESS
} from "../actions/forumActions/postActions";


const initialState = {
    loading: true,
    error: "",
    articles: {},
    postedArticle: {},
    createLoading: false
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        // GET actions
        case REQUEST_ARTICLES:
            return {
                ...state,
                loading: true
            };
        case REQUEST_ARTICLES_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                articles: action.response
            };
        case REQUEST_ARTICLES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        //POST actions
        case REQUEST_CREATE_ARTICLES:
            return {
                ...state,
                createLoading: true
            };
        case REQUEST_CREATE_ARTICLES_SUCCESS:
            let updatedArticles = [
                {
                    ...action.response.article,
                    user: action.author,
                    thread: action.thread
                },
                ...state.articles
            ];

            return {
                ...state,
                error: "",
                createLoading: false,
                postedArticle: action.response.article,
                articles: updatedArticles
            };

        case REQUEST_CREATE_ARTICLES_ERROR:
            return {
                ...state,
                createLoading: false,
                error: action.error
            };
        default:
            return state
    }
};
export default postReducer;