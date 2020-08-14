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

server.get('/posts.json',  (req, res) => {
  res.json(database.posts)
});

server.get('/posts/:postId.json',  (req, res) => {
  const { postId } = req.params;
  const post = database.posts.find(p => p.id === parseInt(postId));
  res.json(post)
});

server.listen(port, () => console.log(`[MockServer] listening at http://localhost:${port}`));

