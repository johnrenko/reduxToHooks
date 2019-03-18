// src/js/components/Add.jsx
import React, { useState, useContext } from "react";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
import { Store } from "../store";

export default function Form() {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(Store);

  const handleChange = event => setTitle(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const id = uuidv1();
    dispatch(addArticle({ title, id }));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success btn-lg">
        SAVE
      </button>
    </form>
  );
}
