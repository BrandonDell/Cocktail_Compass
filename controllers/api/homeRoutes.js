const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        // const postData = await Post.findAll({
        //     include: [User],
        // });
        // // Takes array postData converts into a readable object with get/plain/true
        // const posts = postData.map((post) => post.get({ plain: true }));
        // console.log(posts);
        // sends serialized data into template
        // res.render('allPosts', {
        //     posts,
        //     loggedIn: req.session.loggedIn,
        //     currentPage: 'Home',
      // });
      res.render("homepage")
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
//   router.get('/signup', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
//     res.render('signup', { currentPage: 'Home' });
//   });
module.exports = router;