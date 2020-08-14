import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import PostService from '../services/post-service';

class PostNew extends Component {
  constructor(props) {
    super(props);
    this.postService = new PostService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      post: {
        title: '',
        body: '',
      },
    }
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    const newState = Object.assign({ [name]: value }, this.state);
    newState.post[name] = value;

    this.setState(newState);
  }

  onSubmit() {
    this.postService.createPost(this.state.post).then(post => {
        this.props.history.push('/posts/' + post.id);
      }
    );
  }

  render() {
    const post = this.state.post;

    return (
      <div className="App">
        <h1>New Post</h1>

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
          <Link to={"/posts"}>Back</Link>
        </p>
      </div>
    );
  }
}
export default PostNew;
