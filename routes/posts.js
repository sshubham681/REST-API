const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");

// Routes
// Get back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.send(error);
  }
});

// Submit a Post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const p1 = await post.save();
    res.json(p1);
  } catch (error) {
    res.send(error);
  }
});

// Get back a specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.send(post);
  } catch (error) {
    res.send(error);
  }
});

// Delete post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.send(removedPost);
  } catch (error) {
    res.send(error);
  }
});

// Update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
