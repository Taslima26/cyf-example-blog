import React, { Component } from 'react';
import Settings from "./settings";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettings: false
    }
    this.toggleSetting = this.toggleSetting.bind(this);
  }

  login() {
    this.props.auth.login();
  }

  toggleSetting() {
    this.setState({showSettings: !this.state.showSettings})
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in!
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }

        <p>Home: Are you logged in? {isAuthenticated() ? 'Yes' : 'No'}</p>

        <button onClick={this.toggleSetting}>Settings</button>

        <button>Hello World</button>

        { this.state.showSettings && <Settings auth={this.props.auth} /> }
      </div>
    );
  }
}

export default Home;
