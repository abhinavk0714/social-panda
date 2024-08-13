const express = require('express');
const Comment = require('../models/Comment');
const Post = require('../models/Post')

const router = express.Router();


// Create new comment
router.post('/', async(req, res) => {
    try {
        const post = await Post.findById(req.body.postId);
        const commentRes = await Comment.create(req.body);
        post?.comments.push(commentRes._id);
        post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// Delete comment


module.exports=router;