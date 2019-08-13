import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="comment">
        <img src={this.props.data.author.avatar} alt="Avatar comment" />
        <p>
          <span>{this.props.data.author.name + " "}</span>
          <span>{this.props.data.content}</span>
        </p>
      </div>
    );
  }
}

export default Comment;
