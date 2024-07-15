const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// removed dashboard controller and combined with this page. 
// duplicate code

// similar to mod 13 - get all post
// Get all posts
router.get("/", withAuth, async (req, res) => {
  try {
    //Get all posts where the current user is logged in
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// similar to mod 13 - get one post
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["name"],
            },
          ],  
        },
        {
          model: User,
          attributes: ["name"],
        }
      ],
    });
    
    const post = postData.get({ plain: true });

    res.render('post-id', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post-edit/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [{
            model: User,
            attributes: ["name"]
          }],
        },
        {
          model: User,
          attributes: ["name"]
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("post-edit", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});

// route to login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login')
});

router.get('/post-new', (req, res) => {
  if (req.session.logged_in) {
    res.render('post-new', {
      logged_in: req.session.logged_in
    });
    return;
  }

  res.redirect('login')
});

module.exports = router;
