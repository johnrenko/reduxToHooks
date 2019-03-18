import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DATA_LOADED } from "../constants/action-types";
import { Store } from "../store";

export default function Post() {
  const { state, dispatch } = useContext(Store);
  const [items, setItems] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => dispatch({ type: DATA_LOADED, payload: response.data }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  let remote_articles = state.remote_articles.slice(0, items);

  return (
    <ul className="list-group list-group-flush">
      {remote_articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>
      ))}
      {items === 100 ? (
        <span>No more articles to load</span>
      ) : (
        <button onClick={() => setItems(items + 10)}>Load more</button>
      )}
    </ul>
  );
}
