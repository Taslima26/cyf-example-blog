import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import PostService from '../services/post-service';

class PostsTable extends Component {
  constructor(props) {
    super(props);
    this.postLink = this.postLink.bind(this);
    this.postService = new PostService();
    this.state = { posts: null };
  }

  componentDidMount() {
      this.getPosts();
  }

  getPosts() {
    this.postService.retrievePosts().then(posts => {
        this.setState({posts: posts});
      }
    );
  }

  postLink(postId) {
    return "/posts/" + postId;
  }

  render() {
    const posts = this.state.posts;
    if(!posts) return null;

    return (
      <div className="App">
          <p>
          <Link to="/posts/new">New Post</Link>
          </p>

          {posts.map((post) =>
            <div key={post.id}>
              <h3>{post.title}</h3>

              <p>{post.body.substring(0, 250)}...</p>

              <p>Published on: {post.created_at}</p>

              <Link to={this.postLink(post.id)}>View Full Post</Link>

              <hr></hr>
            </div>


          )}

      </div>
    );
  }
}
export default PostsTable;

