class PostService {
  async retrievePosts() {
    let url = "http://localhost:3001/posts.json";
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

  async getPost(postId) {
    let url = "http://localhost:3001/posts/" + postId + ".json";
    let headers = {};

    return fetch(url, {headers: headers})
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .then(post => {
          return post;
        }
      )
      .catch(error => {
        this.handleError(error);
      });
  }

  async createPost(post) {
    let url = "http://localhost:3001/posts.json"
    let headers = {"Content-Type": "application/json"};

    return fetch(url, {
      method: "POST",
      mode: "cors",
      headers: headers,
      body: JSON.stringify(post)
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

  async deletePost(postId) {
    let url = "http://localhost:3001/posts/" + postId + ".json"
    let headers = {};

    return fetch(url, {
      method: "DELETE",
      headers: headers,
      mode: "cors"
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

  async updatePost(post) {
    let url = "http://localhost:3001/posts/" + post.id + ".json"
    let headers = {"Content-Type": "application/json"};

    return fetch(url, {
      method: "PATCH",
      mode: "cors",
      headers: headers,
      body: JSON.stringify(post)
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
export default PostService;
