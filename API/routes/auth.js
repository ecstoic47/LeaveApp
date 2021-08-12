const router = require("express").Router();
const User = require("../models/user");

//Registration

router.post("/register", async (req, res) => {
  try {
    const name = req.body.username;
    const newUser = new User({
      username: name.toLowerCase(),
      fullname: req.body.fullname,
      department: req.body.department,
      designation: req.body.designation,
      branch: req.body.branch,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const name = req.body.username.toLowerCase();
    const user = await User.findOne({ username: name });
    !user && res.status(400).json("Wrong credentials!");
    if (req.body.password != user.password) {
      res.status(400).json("Wrong Credentials!");
    }
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
