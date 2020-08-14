import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import PostService from '../services/post-service';

class PostEdit extends Component {
  constructor(props) {
    super(props);
    this.postService = new PostService();
    this.handleInputChange = this.handleInputChange.bind(this);

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

    this.postService.getPost(postId).then(post => {
        this.setState({ post: post });
      }
    );
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    const newState = Object.assign({}, this.state);
    newState.post[name] = value;

    this.setState(newState);
  }

  onSubmit() {
    this.postService.updatePost(this.state.post).then(post => {
        this.props.history.push('/posts/' + this.state.post.id);
      }
    );
  }

  render() {
    const post = this.state.post;
    if(!post) return null;

    return (
      <div className="App">
        <h1>Edit Post</h1>

        <p>
          <b>Title:</b>
          <input name="title" value={post.title} maxLength="40" required onChange={this.handleInputChange} />
        </p>

        <p>
          <b>Body:</b>
          <textarea name="body" value={post.body} onChange={this.handleInputChange}></textarea>
        </p>

        <p>
          <button onClick={() => this.onSubmit()}>Save</button>
          <br/>
        </p>

        <p>
          <Link to={"/posts/" + post.id}>Back</Link>
        </p>
      </div>
    );
  }
}
export default PostEdit;
