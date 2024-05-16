const router = require('express').Router();
const { Post, User, Recipe } = require('../models');

router.get('/allPosts', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      limit: 20
    })
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    console.log("!!!!!")
    console.log(recipes)
    res.render("allPosts", {recipes})
  }catch (err) {
    console.log(err)
      res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
      const recipes = await Recipe.findAll({
          // include: [User],
      });
      res.render('allRecipes', {
          recipes,
          loggedIn: req.session.loggedIn,
          currentPage: 'Home',
    });
  } catch (err) {
    console.log(err)
      res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // Check to see if user is logged in..truthy 
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  // if statement is falsy render the login in form
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    // Check to see if user is logged in..truthy 
      if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    // if statement is falsy render the login in form
      res.render('signup');
    });

router.get('/addRecipe', (req, res) => {
  try {
    res.render("addRecipe")
  }catch (err) {
    console.log(err)
      res.status(500).json(err);
  }
});
router.get('/homepage', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('home', { posts, loggedIn: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup', { currentPage: 'Home' });
  });
module.exports = router;

// get all recipes for homepage
// router.get('/', async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//             include: [User],
//         });
//         const posts = postData.map((post) => post.get({ plain: true }));
//         console.log(posts);
//         res.render('allPosts', {
//             posts,
//             loggedIn: req.session.loggedIn,
//             currentPage: 'Home',
//       });
//     } catch (err) {
//       console.log(err)
//         res.status(500).json(err);
//     }
// });
