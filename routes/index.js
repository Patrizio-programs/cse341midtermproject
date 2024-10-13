const router = require("express").Router();
const passport = require("passport");
const mongodb = require("./data/database");

router.get("/", (req, res) => {
  res.send("This is the home page for the midterm project!");
});

//connect data
router.use("/data", require("./data.js"));
router.use("/", require("./swagger"));

//login
router.get("/login", passport.authenticate("github"), (req, res) => {
  res.send("You have successfully logged in!");
});

//logout
router.get("/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.send("You have successfully logged out!");
    });
  });



//init db
mongodb.initDb((err) => {
  if (!err) {
    console.log("Database initialized");
  }
});

module.exports = router;
