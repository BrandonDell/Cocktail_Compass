const router = require('express').Router();
const { Post, User, Recipe } = require('../models');

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
  try {
    res.render("login")
  }catch (err) {
    console.log(err)
      res.status(500).json(err);
  }
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


router.get('/allPosts', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      limit: 20
    })
    res.render("allPosts")
  }catch (err) {
    console.log(err)
      res.status(500).json(err);
  }
});

// get single post router
// router.get('/post/:id', async (req, res) => {
//     try {
//       // findByPk (find by primary key) 
//       const postData = await Post.findByPk(req.params.id, {
//         include: [
//           User,
//           {
//             model: Comment,
//             include: [User],
//           },
//         ],
//       });
//   // if found sequelize model into JS object using get/plain/true method
//       if (postData) {
//         const post = postData.get({ plain: true });
  
//         res.render('singlePost', { post, currentPage: 'Home' });
//       } else {
//         res.status(404).end();
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });
        
// // Need Router handler get for login and signup. Need Review plus work on handlebars
// router.get('/login', (req, res) => {
//   // Check to see if user is logged in..truthy 
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
//   // if statement is falsy render the login in form
//     res.render('login');
//   });

// // Router for handling signup endpoint. Check if logged in redirect to home if no logged in redirect then to signup 
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup', { currentPage: 'Home' });
  });
module.exports = router;

