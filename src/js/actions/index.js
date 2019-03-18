// src/js/actions/index.js
import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  DATA_REQUESTED
} from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function removeArticle(id) {
  return { type: REMOVE_ARTICLE, id };
}

export function getData() {
  return { type: DATA_REQUESTED };
}
