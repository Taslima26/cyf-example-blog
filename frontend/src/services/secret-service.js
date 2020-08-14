import Config from '../config/config';

class SecretService {
  constructor() {
    this.config = new Config();
  }

  async retrieveSecrets() {
    let url = "http://localhost:3001/secrets.json";
    let headers = {};

    return fetch(url, {headers: headers})
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then(json => {
        return json;
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async getSecret(secretId) {
    let url = "http://localhost:3001/secrets/" + secretId + ".json";
    let headers = {};

    return fetch(url, {headers: headers})
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .then(secret => {
          return secret;
        }
      )
      .catch(error => {
        this.handleError(error);
      });
  }

  async createSecret(secret) {
    let url = "http://localhost:3001/secrets.json";
    let headers = {"Content-Type": "application/json"};

    return fetch(url, {
      method: "POST",
      mode: "cors",
      headers: headers,
      body: JSON.stringify(secret)
    })
      .then(response => {
       if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async deleteSecret(secretId) {
    let url = "http://localhost:3001/secrets/" + secretId + ".json";
    let headers = {};

    return fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: headers
    })
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async updateSecret(secret) {
    let url = "http://localhost:3001/secrets/" + secret.id + ".json";
    let headers = {"Content-Type": "application/json"};

    return fetch(url, {
      method: "PATCH",
      mode: "cors",
      headers: headers,
      body: JSON.stringify(secret)
    })
      .then(response => {
       if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  handleResponseError(response) {
      throw new Error("HTTP error, status = " + response.status);
  }
  handleError(error) {
    alert(error.message);
  }
}
export default SecretService;
