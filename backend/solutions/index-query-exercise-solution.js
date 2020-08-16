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

server.get('/users',  (req, res) => {
  res.json(database.users)
});

server.get('/posts/:postId',  (req, res) => {
  const { postId } = req.params;
  const post = database.posts.find(p => p.id === parseInt(postId));
  res.json(post)
});

//1. retrieve all the posts of a given user

//What is the URL of this endpoint?
// Relation: The user has posts, and not another way around, 
// and not just one it can be many (plural)
// so the endpoint will be: /users/{user_id}/posts

server.get('/users/:userId/posts',  (req, res) => {
  const { userId } = req.params;
  const posts = database.posts.filter(p => p.user_id === parseInt(userId));
  res.json(posts)
});

//2. retrieve one single post of a given user

//What is the URL of this endpoint?
//Relation: The user has posts, and we need one of them (singular)
//so the endpoint will be: /users/{user_id}/posts/{post_id}

server.get('/users/:userId/posts/:postId',  (req, res) => {
  const { userId, postId } = req.params;
  const posts = database.posts.filter(p => p.user_id === parseInt(userId));
  const post = posts.find(p => p.id === parseInt(postId));
  res.json(post)
});


//2. (Advanced) I wish to create a new post, the user_id has to be checked

//What is the URL of this endpoint?
server.post('/posts',  (req, res) => {
  let newPost = req.body; 
  let userId = newPost.user_id; //the user id of the new post
  let user = database.users.find(u => u.id === parseInt(userId)) //find the user based on the user id
  if (user !== undefined) { //if the user exists
    let newId = database.posts[database.posts.length -1].id + 1; //create the new id
    newPost.id = newId; //set the new post's id
    database.posts.push(newPost); //store in the array
    res.status(200).send();  
  } else {
    res.status(400).send();
  }
});


//3. I wish to delete one single post based on its id

//What is the URL of this endpoint?

server.delete('/posts/:postId',  (req, res) => {
  const { postId } = req.params;
  let index = database.posts.findIndex(post => post.id === parseInt(postId))
  database.posts.splice(index,1)
  res.status(200).send();
});


//4. (Advanced) I wish to delete a user only if it doesn't have a post

//What is the URL of this endpoint?

server.delete('/users/:userId',  (req, res) => {
  const { userId } = req.params;
  const userPosts = database.posts.filter(post => post.user_id === parseInt(userId));
  if (userPosts.length === 0) {
    let index = database.users.findIndex(user => user.id === parseInt(userId));
    database.users.splice(index,1)
    res.status(200).send();  
  } else {
    res.status(400).send();
  }
});

//Create a query which will give back all the posts based on one of the following:
// title starts with a given a string -> title
// body contains a given string -> body
// I also wish to limit the number of items ->limit
// Examples:

// /posts?body=the&limit=2 --> will return all posts which contain the 'the' in the body, 
// but no more than 2 posts will be returned

// /posts?title=Student --> will return all posts whose title starts with 'Student'

// /posts?limit = 2 --> will return all posts, but the maximum 2


server.get('/posts',  (req, res) => {
  const {title, body, limit} = req.query;
  let foundPosts = database.posts;
  if (title !== undefined) {
    foundPosts = database.posts.filter(post => post.title.startsWith(title)) 
  }
  if (body !== undefined) {
    foundPosts = database.posts.filter(post => post.body.includes(body))
  }
  if (limit !== undefined) {
    foundPosts = foundPosts.slice(0,Number(limit));
  }
  
  res.json(foundPosts);
});



server.listen(port, () => console.log(`[MockServer] listening at http://localhost:${port}`));

