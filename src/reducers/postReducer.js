import {REQUEST_ARTICLES, REQUEST_ARTICLES_ERROR, REQUEST_ARTICLES_SUCCESS} from "../actions/forumActions/postActions";



const initialState = {
    loading: true,
    error: "",
    articles: {},
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ARTICLES:
            return{
                ...state,
                loading: true
            };
        case REQUEST_ARTICLES_SUCCESS:
            return {
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
        default:
            return state
    }
};
export default postReducer;