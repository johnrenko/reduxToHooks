import {
  ADD_ARTICLE,
  DATA_LOADED,
  REMOVE_ARTICLE
} from "../constants/action-types";

export const initialState = {
  articles: [],
  remote_articles: []
};

export function reducer(state = initialState, action) {
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
