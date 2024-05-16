const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    next();
  }
};
const apiGuard = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.status(403).json({ msg: "Please login to view this route!" });
  } else {
    next();
  }
};
const withoutGuard = (req, res, next) => {
  if (!req.session.loggedIn) {
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = { withAuth, apiGuard, withoutGuard };
