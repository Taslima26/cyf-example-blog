import history from '../services/history';

export default class Auth {
  constructor() {
    this.login = this.login.bind(this);
    this._loginRequest = this._loginRequest.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.currentUser = this.currentUser.bind(this);
  }

  async login(email, password) {
    const response = await this._loginRequest(email, password);

    if(response.error != undefined) {
      console.log(`Error logging in: ${response.error}`);
    } else {
      localStorage.setItem('currentUser', response.name);
      console.log(`Logged in as: ${response.email}`);
    }

    return response;
  }

  async _loginRequest(email, password) {
    return fetch('http://localhost:3001/users/sign_in.json', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      mode: "cors",
      body: JSON.stringify({
        'user': {
          'email': email,
          'password': password
        }
      })
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        alert(error);
      });
  }

  // TODO: Make this send an API request to /api/users/sign_out.json to clear the cookie since its httponly
  logout() {
    localStorage.removeItem('currentUser');
  }

  isAuthenticated() {
    const currentUser = localStorage.getItem('currentUser');
    return (currentUser !== null);
  }

  currentUser() {
    return localStorage.getItem('currentUser');
  }
}
