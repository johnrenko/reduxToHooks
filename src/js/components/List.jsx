// src/js/components/List.jsx
import React, { useContext } from "react";
import { removeArticle } from "../actions/index";
import { Store } from "../store";

export default function List() {
  const { state, dispatch } = useContext(Store);

  function onClick(event) {
    dispatch(removeArticle(event.target.id));
  }

  return (
    <ul className="list-group list-group-flush">
      {state.articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
          <button id={el.id} onClick={onClick}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
