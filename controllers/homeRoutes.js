const router = require("express").Router();
const { Post, User, Recipe } = require("../models");
const { withAuth } = require("../utils/auth");

router.get("/allPosts", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      limit: 20,
    });
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    console.log("!!!!!");
    console.log(recipes);
    res.render("allPosts", { recipes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const recipes = await Recipe.findAll({
//       // include: [User],
//     });
//     res.render("allRecipes", {
//       recipes,
//       loggedIn: req.session.loggedIn,
//       currentPage: "Home",
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get("/login", (req, res) => {
  // Check to see if user is logged in..truthy
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // if statement is falsy render the login in form
  res.render("login");
});

router.get("/signup", (req, res) => {
  // Check to see if user is logged in..truthy
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // if statement is falsy render the login in form
  res.render("signup");
});

router.get("/addRecipe", (req, res) => {
  try {
    res.render("addRecipe");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/", async (req, res) => {
  try {
    const postData = await Recipe.findAll({
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts)
    res.render("homepage", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup", { currentPage: "Home" });
});

router.get("/favorites", withAuth, async (req, res) => {
  try {
    const userRecipes = 
      await Recipe.findAll({
        where: { userId: req.session.userId },
      })
    const recipes = userRecipes.map((user) => user.get({ plain: true }));
    console.log(recipes, "==================");
    res.render("favorites", recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    res.render('profile')
  } catch (error) {
    console.error(error) 
    res.status(500).json(error)
  }
})
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
