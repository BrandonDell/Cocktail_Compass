const express = require('express');
const commentRouter = express.Router();
const { Comment } = require('../../models/');
const { apiGuard } = require('../../utils/auth');

commentRouter.post('/', apiGuard, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = commentRouter;
