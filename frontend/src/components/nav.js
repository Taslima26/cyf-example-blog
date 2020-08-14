import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts" id="posts_link">Posts</Link>
          </li>
          <li>
            <Link to="/secrets/">Secrets</Link>
          </li>
          <li>
            <Link to="/chat/">Chat</Link>
          </li>
          <li>
            <Link to="/slow/">A Slow Page</Link>
          </li>
          <li>
            <Link to="/really_slow/">A Really Slow Page</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
