const path = require('path');
const express = require('express');
const cors = require('cors');
const { database } = require('./database');

const server = express();
const port = 3001;

server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
server.use(express.json());
server.use(cors())

//1. Retrieve all posts
server.get('/posts.json',  (req, res) => {
  res.json(database.posts)
});

//2. Retrieve a single post by id (GET /posts/:postId.json)


//3. retrieve all the posts of a given user

//What is the URL of this endpoint?

//4. retrieve one single user by its id

//What is the URL of this endpoint?


server.listen(port, () => console.log(`[MockServer] listening at http://localhost:${port}`));

