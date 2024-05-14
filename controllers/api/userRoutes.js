const router = require('express').Router();
const { User } = require('../../models');


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

router.get('/', async (req, res) => {
  // Check if the user is logged in
  if (req.session.logged_in) {
    // User is logged in, you can access their user_id from the session
    const userId = req.session.user_id;
    const userData = await User.findOne({ where: { id: userId } });
    res.json({
      message: 'You are logged in!',
      user: userData, // Example of accessing user_id from the session
      // user: user // Example of user data fetched from the database
    });
  } else {
    // User is not logged in, redirect them to the login page or handle the situation accordingly
    res.status(401).json({ message: 'You are not logged in.' });
  }
});


router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

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