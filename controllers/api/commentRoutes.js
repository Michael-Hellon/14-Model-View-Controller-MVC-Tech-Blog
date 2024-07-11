const router = require("express").Router();
const { Comment, Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all Comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include:[{model:User, attributes:['name']},
        {model: Post, attributes: ['id'],},
      ]});
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all Comments
router.get('/:id', async (req, res) => {
  try {
    const commentData = await Comment.findOne({
      include:[{model:User, attributes:['name']},
        {model: Post, attributes: ['id'],},
      ]});
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//create new comment
router.post("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.comment_content,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
    res.json(commentData);
  } catch (err) {
    res.status(500).json(err);
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

module.exports = router;