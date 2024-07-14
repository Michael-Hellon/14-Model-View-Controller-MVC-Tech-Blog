const router = require('express').Router();
const { User } = require('../../models');

//adding get route to see if tables are being built
// get all posts  - WORKS
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get user by id - WORKS
router.get('/:id', async (req, res) => {
  // find a single user by its `id`
  // be sure to include its associated elements
  try {
    const userData = await User.findByPk(req.params.id,{
      attributes: { exclude: ['password'] },
    });

    if (!userData) {
      res.status(404).json({ message: 'No products found!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to sign up new users
router.post('/signup', async (req, res) => {
  try {
    // create new user obj to store new user info
    const newUser = new User()
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    const userData = await newUser.save();

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json({ message: 'Unable to sign up user at this time' });
  }
});

// route to login users
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Wrong User email, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Wrong Password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res
        .status(200)  
        .json({ user: userData, message: 'You are now logged in!' });
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
