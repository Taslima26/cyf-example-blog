import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import PostService from '../services/post-service';

class PostShow extends Component {
  constructor(props) {
    super(props);
    this.postService = new PostService();
    this.state = {
      post: null,
    }
  }

  componentDidMount() {
    this.getPost();
  }

  componentDidUpdate(previousProps) {
    if (this.props.match.params.id !== previousProps.match.params.id) {
      this.getPost();
    }
  }

  getPost() {
    const postId = this.props.match.params.id;

    if(postId == 'new') {
      return;
    }

    this.postService.getPost(postId).then(post => {
        this.setState({
          post: post
        });
      }
    );
  }

  onDelete() {
    const post = this.state.post;
    if(window.confirm("Are you sure to delete post: " + post.title + " ?")) {
      const postId = this.props.match.params.id;

      this.postService.deletePost(postId).then(post => {
          this.props.history.push('/posts');
        }
      );
    }
  }

  render() {
    const post = this.state.post;
    if(!post) return null;

    return (
      <div className="App">
        <h2>Viewing Post</h2>

        <p>
          <b>Title:</b> {post.title}
        </p>
        <p>
          <b>Body:</b> {post.body}
        </p>
        <p>
          <b>User:</b> {post.user_id}
        </p>

        <p>
          <Link to="/posts">Back</Link> ||
          <Link to={"/posts/" + post.id + "/edit"}>Edit</Link> ||
          <a href="#" onClick={() => this.onDelete()}>Delete</a>
        </p>
      </div>
    );
  }
}
export default PostShow;
