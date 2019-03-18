import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  DATA_LOADED
} from "../constants/action-types";

const initialState = {
  articles: [],
  remote_articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === REMOVE_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.filter(article => article.id !== action.id)
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remote_articles: state.remote_articles.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;
