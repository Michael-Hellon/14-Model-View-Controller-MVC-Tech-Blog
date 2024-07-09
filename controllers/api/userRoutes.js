const router = require('express').Router();
const { User } = require('../../models');

//adding get route to see if tables are being built
// get all posts
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll()
      
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to sign up new users
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to login users
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { name: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'No user found, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'No user found, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json({ message: 'No user found, please try again' });
  }
});

// logout route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
