import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const mapStateToProps = state => {
  return { remote_articles: state.remote_articles.splice(0, 10) };
};

function mapDispatchToProps(dispatch) {
  return { getData: () => dispatch(getData()) };
}

class ConnectedPost extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.remote_articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }
}

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedPost);

export default Post;
