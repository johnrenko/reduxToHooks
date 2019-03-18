// src/js/components/List.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle } from "../actions/index";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
  return { removeArticle: id => dispatch(removeArticle(id)) };
};

class ConnectedList extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.props.removeArticle(event.target.id);
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
            <button id={el.id} onClick={this.onClick}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

export default List;
