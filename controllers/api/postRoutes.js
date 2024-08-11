const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts - WORKS
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name']
        }
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one post - WORKS
router.get('/:id', async (req, res) => {
  // find a single post by its `id`
  // be sure to include its associated User and Comments
  try {
    const postData = await Post.findByPk(req.params.id,{
      include: [
        {
          model: User,
          attributes: ['name']
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['name']
            }
          ],
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found for that id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json({ message: 'No post found for that id!' });
  }
});

// create new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json({ message: 'Unable to create the post!' });
  }
});

// update a post
router.put('/:id',withAuth, async (req, res) => {
  try {
  // update post data
    const updatePost = await Post.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: { id: req.params.id },
    });

    if (!updatePost) {
      res.status(404).json({ message: 'No post found for that id!' });
      return;
    }
      res.status(200).json(updatePost);
  } catch (err) {
      res.status(500).json(err);
    }
  }); 


// delete a post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    // First, delete the comment associated with the post
    await Comment.destroy({
      where: {
        post_id: req.params.id,
      },
    });

    // Then delete the post itself
    const postDelete = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postDelete) {
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
