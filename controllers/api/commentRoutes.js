const router = require("express").Router();
const { Comment, Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all Comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      // takes in all attribute EXCEPT password
      // easier than list all the models and attributes to include
      attributes: { exclude: ['password'] },
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get Comment by id
router.get('/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      // takes in all attribute EXCEPT password
      // easier than list all the models and attributes to include
      attributes: { exclude: ['password'] },
    });

    if (!commentData) {
      res.status(500).json({ message: 'No comment found for that id!' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create new comment
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment: req.body.comment_content,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json({ message: 'Unable to add comment.' });
  }
});

// update comment
router.put('/:id',withAuth, async (req, res) => {
  try {
    const commentData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
        },
      });
  
      if (!commentData) {
        res.status(200).json(commentData);
      } else {
        res.status(404).json({message: "No comment found, trey again."});
      }
  
    } catch (err) {
      res.status(400).json(err);
    } 
  });

// delete a comment 
router.delete('/:id',async (req, res) => {
  // delete one comment by its `id` value
  try {
    const commentDelete = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentDelete) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }

    res.status(200).json(commentDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;