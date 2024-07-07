const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// similar to mod 13 - get all post
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postDataData = await Post.findAll({
      include: [User],
    });

    // Serialize data so the template can read it
    const post = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// similar to mod 13 - get one post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["name"],
          },
        },        
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    if (postData) {
    const project = projectData.get({ plain: true });
    res.render('post by id:', {
      ...post,
      logged_in: req.session.logged_in
    });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to login
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
