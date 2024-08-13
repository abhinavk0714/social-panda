const express = require('express');
const Comment = require('../models/Comment');
const Post = require('../models/Post')

const router = express.Router();

// Create new comment
router.post('/', async (req, res) => {
    try {
        const { commentText, createdBy, post } = req.body; // Extract relevant fields from the request body

        // Find the post by its ID
        const postToUpdate = await Post.findById(post);

        if (!postToUpdate) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Create a new comment
        const newComment = await Comment.create({
            commentText,
            createdBy,
            post,
            createdAt: Date.now(),
        });

        // Push the comment ID into the post's comments array
        postToUpdate.comments.push(newComment._id);
        await postToUpdate.save(); // Save the updated post

        res.status(201).json(newComment);
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ message: error.message });
    }
});

// router.post('/', async(req, res) => {
//     try {
//         const post = await Post.findById(req.body.postId);
//         const commentRes = await Comment.create(req.body);
//         post?.comments.push(commentRes._id);
//         post.save();
//         res.status(201).json(post);
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// Delete comment


module.exports=router;