import React, { Component } from "react";
import Comment from "./Comment";
import "./Post.css";

class Post extends Component {
  render() {
    //console.log(this.props.data);
    return (
      <section className="post">
        <div className="authorInfo">
          <img src={this.props.data.author.avatar} alt="Avatar" />
          <div>
            <h5>{this.props.data.author.name}</h5>
            <span>{this.props.data.date}</span>
          </div>
        </div>

        <p>{this.props.data.content}</p>

        <hr />

        {this.props.data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </section>
    );
  }
}

export default Post;
